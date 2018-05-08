const treeList = [
    {
        id: 1,
        name: "REVENUE"
    },
    {
        id: 2,
        name: "ASSET"
    },
    {
        id: 3,
        name: "EXPENSE"
    }
]

class TreeList extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTrList = ()=> {
        treeList.forEach((treeData)=>{
            return (
                <tr>
                    <td className="tgrid-data-cell">
                        <span className=""></span>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="tgrid-body-wrapper">
                    <table className="tgrid-body-table">
                        <tbody>
                        {this.renderTrList()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


var destination = document.querySelector("#container");


ReactDOM.render(
    <div>
        <TreeList/>
    </div>,
    destination
);