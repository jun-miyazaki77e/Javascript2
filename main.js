const num_btn = document.querySelectorAll('.num_btn');
let total = 0;
{
  const output_total = document.getElementById('output_total');
  num_btn.forEach(index => {
    index.addEventListener('click', () => {
      console.log(index.dataset.indexId);
      if(total ===0) {
        total = index.dataset.indexId;  
      }else{
        total += index.dataset.indexId;
      }      
      output_total.textContent = total;
    }) ;
  });
  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    console.log(eval(total));
    output_total.textContent = eval(total);
    total=0;
  });
}
  const clear = document.getElementById('clear');
  clear.addEventListener('click',() =>{
    total=0;
    console.log(total);
    output_total.textContent = total;
  });