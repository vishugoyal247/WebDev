function Button({txt,on}){
    return (
        <button onClick={on} className="rounded-md text-white bg-indigo-500 py-2 px-4">{txt}</button>
    );
}

export default Button;