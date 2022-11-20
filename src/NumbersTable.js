//morning bonus 2

export default function NumbersTable(props) {
    let list = Array.from({length: (props.limit + 1)}, (v, i) => i) 
    list.splice(0, 1);
    
    const even = (num) => {
      if(num % 2 === 0){
        return "even"
      }else{
        return "odd"
      }
    }

    const NumbersList = () => {
      
      return(
        <ul className="numberList">
        {list.map(number => (
          <li key={number} className={even(number)}>
            <p>{number}</p>
          </li>
        ))}
      </ul> 
      )   
    }

    return(
        <>
          <h1>Bonus2: NumbersTable</h1>
          <NumbersList />
        </>
    )

}