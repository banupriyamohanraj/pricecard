// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'
import './Card.css'

function App() {
  let cardvalue = [
    {
      cardsubtitle: 'FREE',
      currency: '$',
      price: 0,
      offers: [
        {
          name: 'Single User',
          isEnabled: true
        },
        {
          name: '5GB Storage',
          isEnabled: true
        },
        {
          name: 'Unlimited Public Projects',
          isEnabled: true
        },
        {
          name: 'Community Access',
          isEnabled: true
        },
        {
          name: 'Unlimited Private Projects',
          isEnabled: false
        },
        {
          name: 'Dedicated Phone Support',
          isEnabled: false
        },
        {
          name: 'Free Subdomain',
          isEnabled: false
        },
        {
          name: 'Monthly Status Reports',
          isEnabled: false
        }
      ]
    },
    {
      cardsubtitle: 'PLUS',
      currency: '$',
      price: 9,
      offers: [
        {
          name: '5 User',
          isEnabled: true
        },
        {
          name: '50GB Storage',
          isEnabled: true
        },
        {
          name: 'Unlimited Public Projects',
          isEnabled: true
        },
        {
          name: 'Community Access',
          isEnabled: true
        },
        {
          name: 'Unlimited Private Projects',
          isEnabled: true
        },
        {
          name: 'Dedicated Phone Support',
          isEnabled: true
        },
        {
          name: 'Free Subdomain',
          isEnabled: true
        },
        {
          name: 'Monthly Status Reports',
          isEnabled: false
        }
      ]
    },
    {
      cardsubtitle: 'PRO',
      currency: '$',
      price: 49,
      offers: [
        {
          name: 'Unlimited User',
          isEnabled: true
        },
        {
          name: '150GB Storage',
          isEnabled: true
        },
        {
          name: 'Unlimited Public Projects',
          isEnabled: true
        },
        {
          name: 'Community Access',
          isEnabled: true
        },
        {
          name: 'Unlimited Private Projects',
          isEnabled: true
        },
        {
          name: 'Dedicated Phone Support',
          isEnabled: true
        },
        {
          name: 'Unlimited Free Subdomain',
          isEnabled: true
        },
        {
          name: 'Monthly Status Reports',
          isEnabled: true
        }
      ]
    }
  ];




  return <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {

          cardvalue.map((obj) => {

            return <Card data={obj}></Card>
          })

        }

      </div>
    </div>
  </section>
}
export default App;

