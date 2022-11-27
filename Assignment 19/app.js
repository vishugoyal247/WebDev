function isPrime()
{
    const start = +(document.getElementById('s').value);
    const end = +(document.getElementById('e').value);

    const mydiv = document.getElementById('result');
    let x = "";

    for (let index = start; index <=end; index++) {
        
        let count =0;
        if((index%2==0 &&  index!=2 ) || index==1)
            continue;
        for (let index2 = 2; index2 <= index/2; index2++) { 
            
            
            if(index % index2 == 0)
            {
                count++;
                break;
            }
            
        }

        if(count == 0)
        {
            x+=`<div class="bg-red-400 p-4 rounded-md">${index}</div>`;
        }
    }
    x=`<div  class=" bg-blue-500 p-4 flex flex-wrap gap-x-2 gap-y-2 " >${x}</div>`;
    mydiv.innerHTML=x;


}