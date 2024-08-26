import { Geometric } from "@/components/Geometric";
import { Person } from "@/components/Person";
import { Personprops } from "@/components/Personprops";
import { Card } from "@/components/Card";
import { Cond } from "@/components/Cond";
import { people } from "@/data/datalist";
function Page() {


  return (<div style={{
    display: 'flex', justifyContent: 'center',
    flexDirection: 'column', alignItems: 'center'
  }}>
    <h1 className="font-bold text-2xl">Ola mundo!</h1>
    <h3>Codigo escrito em react ... </h3>
    <Geometric />
    <Person />
    <h1 style={{ fontSize: '50px', textAlign: "center" }}>Celebridades</h1>
    <Personprops
      name='Elon Musk'
      avatar="https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg"
      roles={['Ceo da tesla', 'Ceo da spaceX', 'Ceo do Twitter', 'Ceo da Neuralink', 'Ceo da Globo ']}



    />
    <Personprops
      name='Gusttavo Lima'
      avatar="https://s2-g1.glbimg.com/7kc3Uu1l1Cv0_CNdkKYBvjAG5N8=/0x0:1700x1065/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/L/Q/ezo4B7QGu8QQ31BfD2pw/gusttavo.jpg"
      roles={['Cantor sertanejo', 'Pai 3 filhos', 'Morador de goiania', 'Cabelos cor de ouro', 'Rosas versos e vinhos']}



    />
    <Personprops
      name='Rander Teixeira'
      avatar="https://media.licdn.com/dms/image/v2/D4D03AQGwCqEB4fWKZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713997126532?e=1729728000&v=beta&t=6fJh1ir16bsiBZ7YHYjS9bRBlRfZEzhSQkViZv7w-yA"
      roles={['Programador', 'Nodejs', 'TypeScript', 'Prisma', 'Mysql']}



    />
    <div style={{ display: 'flex', width: '100%' }}>
      <Card >
        <div style={{ display: 'flex', flexDirection: "column", width: '400px', border: '1px solid black', borderRadius: '10px', margin: '20px' }}>
          <h1 style={{ fontSize: '25px', fontWeight: "bolder" }}>Titulo do card</h1>

          <h3>Subitulo</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus fuga saepe in.
            Ipsum sint accusantium laudantium perferendis minus, doloribus optio. Suscipit architecto tempora obcaecati,
            sapiente at ut deserunt voluptate aliquam.</p>
          <button>saiba mais</button>
        </div></Card>


      <Card >
        <div style={{ display: 'flex', flexDirection: "column", width: '400px', border: '1px solid black', borderRadius: '10px', margin: '20px' }}>
          <h1 style={{ fontSize: '25px', fontWeight: "bolder" }}>Titulo de Outro Card</h1>

          <h3>Card n° 2 </h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus fuga saepe in.
            Ipsum sint accusantium laudantium perferendis minus, doloribus optio. Suscipit architecto tempora obcaecati,
            sapiente at ut deserunt voluptate aliquam.</p>
          <button>saiba mais</button>
        </div></Card>


    </div>
    <Cond frase="A vida e dura so pra quem e mole!" author="Rio Negro e Solimões" >



    </Cond>



    <div>
      Pessoas:
    <ul>
       itens:{people.length}
      
      {people.map(people=><li>{people.id}-{ people.name}-{people.profession}</li>)}
      { people.map(person=>person.id).reduce((acumulator,currentValue)=>acumulator+currentValue,0)}
    </ul>

    </div>
  </div>)
}

export default Page;