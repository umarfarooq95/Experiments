import React, {Component} from 'react';
import './styles.css';

let typed = '';

class AutoSuggest extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: '',
            typeValueInput: '',
            selectedOption: 'bottom',
            filteredArray: [],
            onKeyUpPress: false,
            countForLiClassEle: 0,
            typedValue: '',
            isOpened: false
        };
        this.onChangeInput = this.onChangeInput.bind(this)
    }


    onChangeInput (e){
        let value = e.target.value;
        value = value.charAt(0).toUpperCase() + value.slice(1);
        const regex = new RegExp('^' + value, 'i');
        let filteredArray = this.props.dataSource.filter((data) => regex.test(data.name) ? data : null);
        this.setState({
            value: value,
            typeValueInput: value,
            countForLiClassEle: 0,
            filteredArray: value ? filteredArray : [],
            isOpened: !!filteredArray.length
        })
    }

    onLastKeyDown = (ulElementsLengthCount, liElements) => {
        let {typeValueInput} = this.state;
        liElements[ulElementsLengthCount - 1].classList.remove('auto-suggest-list-highlighted');
        liElements[ulElementsLengthCount - 1].children[0].classList.remove('color-black');
        liElements[ulElementsLengthCount - 1].children[0].classList.add('color-red');
        this.setState({
            countForLiClassEle: 0,
            value: typeValueInput
        });
    };

    onLastKeyUp = (ulElementsLengthCount, liElements) => {
        let {typeValueInput, countForLiClassEle} = this.state;
        liElements[countForLiClassEle].classList.remove('auto-suggest-list-highlighted');
        liElements[countForLiClassEle].children[0].classList.remove('color-black');
        liElements[countForLiClassEle].children[0].classList.add('color-red');
        this.setState({
            countForLiClassEle: ulElementsLengthCount,
            onKeyUpPress: true,
            value: typeValueInput
        });
    };

    onPreviousElementClassesRemove = (liElements) => {
        let {countForLiClassEle} = this.state;
        liElements[countForLiClassEle].previousSibling.classList.remove('auto-suggest-list-highlighted');
        liElements[countForLiClassEle].previousSibling.children[0].classList.remove('color-black');
        liElements[countForLiClassEle].previousSibling.children[0].classList.add('color-red');
    };

    onChangeKeyDownToAddClasses = (liElements) => {
        let {countForLiClassEle} = this.state;
        liElements[countForLiClassEle].classList.add('auto-suggest-list-highlighted');
        liElements[countForLiClassEle].children[0].classList.remove('color-red');
        liElements[countForLiClassEle].children[0].classList.add('color-black');
        return liElements[countForLiClassEle].innerText;
    };

    onKeyUpChange = (e) => {
        let {countForLiClassEle} = this.state;
        let parentNodeEle = e.target.parentNode;
        let ulEle = parentNodeEle.childNodes[2].childNodes[0];
        let inputEle = parentNodeEle.childNodes[0];
        let liElements = ulEle.children;
        let ulElementsLengthCount = liElements.length;
        let inputValueForSelectedLi = '';
        if (e.keyCode === 40) {
            if (ulElementsLengthCount === countForLiClassEle) {
                this.onLastKeyDown(ulElementsLengthCount, liElements);
                return;
            }
            if (liElements[countForLiClassEle].previousSibling) {
                this.onPreviousElementClassesRemove(liElements)
            }
            inputValueForSelectedLi = this.onChangeKeyDownToAddClasses(liElements);
            this.setState({
                countForLiClassEle: ++this.state.countForLiClassEle,
                value: inputValueForSelectedLi
            });
        }
        if (e.keyCode === 38) {
            this.setState({
                countForLiClassEle: --this.state.countForLiClassEle
            });
            setTimeout(() => {
                this.setPreviousSiblingClass(liElements, ulElementsLengthCount)
            }, 0);
        }
    };

    setTypedName = (name) => {
        this.setState({
            typedValue: name
        })
    };

    setPreviousSiblingClass = (liElements, ulElementsLengthCount) => {
        let {countForLiClassEle, onKeyUpPress} = this.state;
        let inputValueForSelectedLi = '';
        if (countForLiClassEle === 0) {
            this.onLastKeyUp(ulElementsLengthCount, liElements);
            return;
        }
        if (onKeyUpPress) {
            liElements[countForLiClassEle].classList.add('auto-suggest-list-highlighted');
            liElements[countForLiClassEle].children[0].classList.remove('color-red');
            liElements[countForLiClassEle].children[0].classList.add('color-black');
            inputValueForSelectedLi = liElements[countForLiClassEle].innerText;
            this.setState({
                value: inputValueForSelectedLi,
                countForLiClassEle: ulElementsLengthCount,
                onKeyUpPress: false,
            });
            return
        }
        if (liElements[countForLiClassEle].previousSibling) {
            liElements[countForLiClassEle].previousSibling.classList.add('auto-suggest-list-highlighted');
            liElements[countForLiClassEle].previousSibling.children[0].classList.remove('color-red');
            liElements[countForLiClassEle].previousSibling.children[0].classList.add('color-black');
            inputValueForSelectedLi = liElements[countForLiClassEle].previousSibling.innerText;
        }
        liElements[countForLiClassEle].classList.remove('auto-suggest-list-highlighted');
        liElements[countForLiClassEle].children[0].classList.remove('color-black');
        liElements[countForLiClassEle].children[0].classList.add('color-red');
        this.setState({
            value: inputValueForSelectedLi
        });
    };

    getSuggestionName = (name) => {
        typed = '';
        let {typeValueInput} = this.state;
        for (let k = 0; k < name.length; k++) {
            if (name[k] === typeValueInput[k]) {
                typed += name[k];
            }
        }
        let slicedname = name.substr(typed.length);
        return typed.length ? slicedname : name
    };

    componentDidUpdate() {
        if (typed) {
            setTimeout(() => {
                this.setTypedName(typed)
            }, 0)
        }
    }

    onClickItem = (e) => {
        let liItemValue = e.target.innerText;
        this.props.onSelectedItems(liItemValue);
        this.setState({
            value: liItemValue,
            isOpened: false
        });
    };

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    };

    renderDropdownAlignmentComponent = () => {
        return (<div className="radio-container">
            <h2>Dropdown Alignment</h2>
            <ul>
                <li>
                    <input type="radio" id="bottom" name="alignment" value="bottom"
                           checked={this.state.selectedOption === 'bottom'}
                           onChange={this.handleOptionChange}/>
                    <label className="radio-btn" htmlFor="bottom">Bottom</label>
                    <div className="check"></div>
                </li>
                <li>
                    <input type="radio" id="left" name="alignment" value="left"
                           checked={this.state.selectedOption === 'left'}
                           onChange={this.handleOptionChange}/>
                    <label className="radio-btn" htmlFor="left">Left</label>
                    <div className="check"></div>
                </li>
                <li>
                    <input type="radio" id="right" name="alignment" value="right"
                           checked={this.state.selectedOption === 'right'}
                           onChange={this.handleOptionChange}/>
                    <label className="radio-btn" htmlFor="right">Right</label>
                    <div className="check"></div>
                </li>
            </ul>
        </div>)
    };

    renderUlListClassContainer = () => {
        let {selectedOption} = this.state;
        switch (selectedOption) {
            case "bottom":
                return "auto-suggest-bottom-container";
            case "left":
                return "auto-suggest-left-container";
            case "right":
                return "auto-suggest-right-container";
        }
    };

    onClickAttachToBody = (e) => {
        let isTargetedElement = e.target.tagName === "INPUT"
            || e.target.tagName === "LABEL" || e.target.tagName === "LI";
        if (!isTargetedElement) {
            this.setState({
                isOpened: false
            });
        }
    };

    toggleListItemDropdownMethod = () => {
        let {isOpened} = this.state
        if (isOpened) {
            document.body.addEventListener('click', this.onClickAttachToBody);
        } else {
            document.body.removeEventListener('click', this.onClickAttachToBody);
        }
    };

    render() {
        let {filteredArray, value, typedValue, isOpened} = this.state;
        this.toggleListItemDropdownMethod();
        return (
            <div>
                {this.renderDropdownAlignmentComponent()}
                <input type="text" className="auto-suggest-input"
                       placeholder="Type Programming Language Ex:Ja.."
                       value={value}
                       onKeyUp={this.onKeyUpChange}
                       onFocus={this.onChangeInput}
                       onChange={this.onChangeInput}
                />
                <div
                    className={isOpened ? `auto-suggest-container ${this.renderUlListClassContainer()}` : "auto-suggest-container-hide"}>
                    <ul className="auto-suggest-ul">
                        {
                            filteredArray.map((data, index) => {
                                return (
                                    <li className="auto-suggest-list-items"
                                        key={index} onClick={this.onClickItem}>
                                        <span className="font-bold color-red">{typedValue}</span>
                                        <span>{this.getSuggestionName(data.name)}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default AutoSuggest;
