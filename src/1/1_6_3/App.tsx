// 1_6_3 Refactor a series of ? : to if and variables 
/*
Этот компонент Drink использует серию ? : 
условий для отображения различной информации 
в зависимости от того, является ли name пропс 
"чай" или "кофе". Проблема в том, что информация 
о каждом напитке распределена по нескольким условиям. 
Переработайте этот код, чтобы использовать один оператор 
if вместо трех ? : условий.
*/

function Drink({ name }: { name: string }) {
    let age,plant,Caffeine;

    if (name === 'tea'){
        plant= 'leaf';
        Caffeine= '15–70 mg/cup';
        age= '4,000+ years';
    }else {
        plant= 'bean';
        Caffeine= '80–185 mg/cup';
        age= '1,000+ years';
    }
    
  return (
      <section>
          <h1>{name}</h1>
          <dl>
              <dt>Part of plant</dt>
              <dd>{plant}</dd>
              <dt>Caffeine content</dt>
              <dd> {Caffeine}</dd>
              <dt>Age</dt>
              <dd> {age} </dd>
          </dl>
      </section>
  );
}

export default function DrinkList() {
  return (
      <div>
          <Drink name="tea" />
          <Drink name="coffee" />
      </div>
  );
}