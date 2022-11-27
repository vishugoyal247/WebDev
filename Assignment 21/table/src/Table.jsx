import {useState} from 'React';
import Button from "./Button";
import TableRow from "./TableRow";

function Table() {

    const [s, set] = useState(2);

    function next() {
        set(s + 1);
    }

    return (
        <div className="flex flex-col gap-y-4">
            <div className="self-center ">
                <Button on={next} txt="Next" />
            </div>
            <div className="border-2 border-black p-4"  >
                <TableRow num={s} count="1" />
                <TableRow num={s} count="2" />
                <TableRow num={s} count="3" />
                <TableRow num={s} count="4" />
                <TableRow num={s} count="5" />
            </div>
        </div>

    )

}

export default Table;