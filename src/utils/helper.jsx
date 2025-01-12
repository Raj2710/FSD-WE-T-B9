export const findIndex = (array,id)=>{
    let index = -1
    for(let i = 0;i<array.length;i++)
    {
        if(array[i].id == id)
        {
            index = i
            break;
        }
    }

    return index
}