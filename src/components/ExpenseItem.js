import { Component } from "react";
import { MdDelete , MdEdit } from "react-icons/md";
//export class ExpenseItem extends Component{
const ExpenseItem = (props) => {

        console.log(props.expense);
        return(
            <li className="item">
                <div className="info">
                    <span className="expense">{props.expense.charge}</span>
                    <span className="amount">{props.expense.amount}원</span>
                </div>
                <div>
                    <button className="edit-btn" onClick={() => 
                    props.handleEdit(props.expense.id)
                    }><MdEdit/></button>
                    <button className="clear-btn" 
                    onClick={()=>props.handleDelete(props.expense.id)}>
                        <MdDelete/></button>
                </div>

            </li>
        )
}

export default ExpenseItem