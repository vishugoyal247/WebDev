import { useState } from 'react';
import Table from './Table';
import Button from './Button';

function App() {
  const [f,fl] =useState(false);


  let table1 = "t1";
  let table2 = "t2";

  if(f){
    table1="t2";
    table2="t1";
  }

  function flip(){
    fl(!f);
  }

  return (

    <div className='p-4 flex flex-col items-center '>


      <div className='flex gap-x-4 gap-y-4 mb-4 '>
        <Table key={table1}/>
        <Table key={table2}/>
      </div>
      <div>
        <Button on={flip} txt="Flip" />
      </div>
    </div>
  )
}

export default App;
