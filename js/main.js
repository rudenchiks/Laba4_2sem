document.addEventListener("DOMContentLoaded", function() {
    showTable('build', buildings);
    const btnSwitchTable=document.getElementById('bthSwitchTable')
    btnSwitchTable.addEventListener('click', ()=>{
        if(btnSwitchTable.innerHTML==='Скрыть таблицу'){
            btnSwitchTable.innerHTML='Показать таблицу';
            hideTable('build')
        } else{
            btnSwitchTable.innerHTML='Скрыть таблицу';
            showTable('build', buildings)
        }
    })
    document.getElementById('bthCrateGraph').addEventListener('click', ()=>{
        drawGraph(buildings);
    })
})

document.getElementById('bthSwitchTable').addEventListener('click', ()=>{

})