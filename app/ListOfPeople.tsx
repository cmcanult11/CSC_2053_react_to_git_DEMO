export default function ListOfPeople() {
    const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
    ];

    const people2 = [];
    for(let person of people){
        people2.push(<li>{person}</li>);
    }
    return (
        <div>
            <li> {people} </li>
            {people2}
        </div>
    );
}