export default function ListOfPeople() {
    const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario JosÃ© Molina-Pasquel HenrÃ­quez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
    ];
    
    const fp2 = people.map(person=><div>
        <p>Hello, {person}</p>
        <p>Welcome to Platform Computing!</p>
        </div>)

    return (
        <div>
            <ul className="list-disc">
            {fp2}
            </ul>
        </div>
    );
}
