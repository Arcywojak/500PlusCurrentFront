import React, {Component} from 'react'; 

import {connect} from 'react-redux';

import Swinia from '../../images/SWINIA.svg';
import './account.min.css';
import './offers/offer.min.css';
import PropTypes from 'prop-types';
import plusCircleAdd from '../../images/plusCircleAdd.svg';
import cog from '../../images/cog-solid.svg';
import Kid from './kids/kid';
import AddKid from './kids/addKid';
import KidDetails from './kids/kidDetails';
import Offer from './offers/offer';
import OfferDetails from './offers/offerDetails';
import UserSettings from './userSettings/userSettings';
import DeleteKid from './kids/deleteKid';
import {Redirect} from 'react-router-dom';
import ActivityLogout from './userSettings/userSettingsChildren/securityChildren/activityLogout';
import {
        toggleSettings, 
        toggleAddKid, 
        toggleKidDetails, 
        toggleOfferDetails,
        removeAll,
        toggleDeleteKid
        } 
        from '../../functions/userAccountHelplers';

class Account extends Component {

    
    /*
        !!UWAGA TO JEST ORYGINALNA FUNKCJA WYŚWIETLAJĄCA DIVY DZIECI, NA RAZIE W CELU
        WYŚWIETLANIA PRZYKŁADOWAYCH DANYCH JEST ONA ZASTĄPIONA KOPIĄ!!
        
        const listOfKids = props.kidDetails.map(element=>{
        return(
            <Kid kid={element} key={element.id} handleClickEditProfile={props.handleClickEditProfile}/>
        )
    })*/

    componentDidMount() {


        /* jeżeli ktoś nie jest zalogowany to wywali go z tej karty */
        if(sessionStorage.user_name){
            this.setState({redirect:false})


            /* fetchowanie danych rodziny zalogowanego */
            fetch(`http://vps817819.ovh.net:50/children/?parent_id=${sessionStorage.getItem('user_id')}&parent_email=${sessionStorage.getItem('user_email')}`, {
                method : "GET"
            })
            .then(response =>{
                return response.json()
            })
            .then(data =>{   
                this.setState({kids_list : data})
            })
            
            fetch(`http://vps817819.ovh.net:50/preferences/?id=${sessionStorage.getItem('user_id')}&email=${sessionStorage.getItem('user_email')}`, {
                method : "GET"
            })
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                console.log(data)
            })
        }
        else{
            this.setState({redirect:true})
        }

        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();

           console.log(e)
           e.returnValue = "A"
            return "DO NOT LEAVE"
        })

   
    }

    state = {
        actualKid : {
            id:11,
            name:'ssss',
            age:5,
            shoeSize:5,
            favColor:'s',
            height:5,
            img:''
        },
        actualOffer : {
            id:14, 
            name:'Treny',
            page:'www.PoChujKochanowskiNapisałTreny.pl', 
            price:1830, 
            description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.',
            img:'a.png'
        } , 


        user_name : sessionStorage.user_name,
        redirect : null,
        kids_list : [],
        interest_list : [],


        DUMMY_DATA : [
            {id:0, name:'HENIO', age:5, gender:'m', shoeSize:41, favColor:'BLACK', height:'545', img:'a.png'},
            {id:1,name:'PABLO', age:5, gender:'k', shoeSize:42, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'},
            {id:2, name:'KACPER', age:5, gender:'m', shoeSize:43, favColor:'BLACK', height:'545', img:'Boy Avatar.svg'}
            
        ],
    
         DUMMY_OFFERS : [
            {id:6, name:'Pan Tadeusz', page:'www.CzemuPanTadeuszToEpopejaNarodowa.pl', price:1830, description:'W "Panu Tadeuszu" znajduje się wiele elementów charakterystycznych dla eposu.Jest on wielowątkowym utworem poetyckim ukazującym bohaterskie czyny wielkich postaci, na tle przełomowych dla narodu wydarzeń. W utworze występuje wszechwiedzący i wszechobecny narrator uprzedzający o przyszłych przypadkach bohaterów. Nie każdy epos jest jednak epopeją narodową.', img:'a.png'},
            {id:4, name:'Dziady III', page:'www.KonradJakoBohaterRomantyczny.pl', price:1830, description:'Konrad to przede wszystkim bohater dynamiczny. Już na początku dramatu przechodzi przeobrażenie - "Gustavus obiit - hic hatus est Conradus [Gustaw umarł - urodził się Konrad]". Maria Janion określiła tę przemianę jako transformację z Kochanka kobiety w Kochanka ojczyzny.', img:'a.png'},
            {id:7, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:8, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochan asd asdasd asd asd asd asd asd asd asd asd asd sad asd asd asd asd sad asd asd asd as das das das asd asd asd asd asd asd as das das das das dasd asd as das dasd asd asd asd asd as das das as das ds asd asd asd asd asd asd asd asd asd asd asd asdas as da asd asdas das dasd asd asd asd asd asd as dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd as das das dasd asd asd as das das das as das das das das dassd as dasd asd asd as dasowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'}, 
            {id:9, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:15, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:10, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:11, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:12, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},       
            {id:13, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'},
            {id:14, name:'Treny', page:'www.PoChujKochanowskiNapisałTreny.pl', price:1830, description:'Jan Kochanowski napisał treny po utracie swojej ukochanej córeczki Orszuli . Napisał je ponieważ nie potrafił zrozumieć dlaczego ona odeszła. Przeżywał również okres, w którym coś tam coś tam nie pameitam.', img:'a.png'}
        ]
    }

    static propTypes = {
        deleteUser: PropTypes.func
    }


    changeActualKid = (id) => {
        let index = this.state.DUMMY_DATA.findIndex( (item) => item.id === id)
        this.setState({
            actualKid:this.state.DUMMY_DATA[index]
        })
       
    }

    changeActualOffer = (id) => {
        let index = this.state.DUMMY_OFFERS.findIndex( (item) => item.id === id)
        this.setState({
            actualOffer:this.state.DUMMY_OFFERS[index]
        })
    }

render(){

    

     /**************** RENDER LIST OF KIDS AND OFFERS **************/
     const listOfKids = this.state.kids_list.map(element=>{
        return(
            <Kid kid={element} key={element.id} 
            changeActualKid={this.changeActualKid} toggleKidDetails={toggleKidDetails}
            toggleDeleteKid={toggleDeleteKid}/>
        )
    })

    const listOfOffers = this.state.DUMMY_OFFERS.map(element=>{
        return(
            <Offer offer={element} key={element.id}
            changeActualOffer={this.changeActualOffer} toggleOfferDetails={toggleOfferDetails}/>
        )
    })

    
    /*************************************************************/

    return(
        <>

            {/* FLYING THINGS */}

            {/* redirect ze strony */}
            {(this.state.redirect) ? <Redirect to="/"/> : null}


            <div className="flying-block user-settings-wrapper anim-fade-in none">
                <UserSettings />
            </div>
            <div className="flying-block add-new-kid-wrapper anim-fade-in none">
                <AddKid />
            </div>
            <div className="flying-block delete-kid-wrapper anim-fade-in none">
                <DeleteKid kid={this.state.actualKid} />
            </div>
            <div className="flying-block edit-kid-wrapper anim-fade-in none">
                <KidDetails kid={this.state.actualKid} />    
            </div>
            <div className="flying-block user-offer-details-wrapper anim-fade-in none">
                <OfferDetails offer={this.state.actualOffer} />    
            </div>
            <div className="flying-block activity-logout-wrapper anim-fade-in none">
                <ActivityLogout />    
            </div>

            <div className="overlay none" onClick={removeAll}></div>

            {/*****************/}

        <main>
            <div className="user-description">
                <div className="user-edit" onClick={toggleSettings}>
                    Edytuj profil <img src={cog} alt="edytuj_profil"/>
                </div>
                <div className="user-grid">
                    <div className="user-his-image">
                        <img src={Swinia} alt="profile_picture"/>
                    </div>
                    <div className="user-textarea">
                        <h2 className="user-name">
                            {this.state.user_name}
                        </h2>
                        <h5 className="user-likes-h5">
                            Polubione oferty: <span>Not coded in API</span>
                        </h5>
                        <h5 className="user-likes-h5">
                            Data założenia: <span>Not coded in API</span>
                        </h5>     
                    </div>
                </div>
            </div>

            <div className="user-family wrapping-border">
                <h1 className="fine-text">Moja rodzina:</h1>
                <div className="user-members">
                    <div className="user-member add">
                        <div className="user-member-img">
                            <img src={plusCircleAdd} alt="dodaj_członka" 
                            onClick={toggleAddKid}/>
                        </div>
                        <div className="user-member-text">
                            Dodaj nowego członka.
                        </div>
                        
                    </div>
                    {listOfKids}         
                </div>   
            </div>
            <div className="offer-list wrapping-border">
                <h1 className="fine-text">Ulubione oferty:</h1>
                <div className="offers-block">
                    {listOfOffers}
                </div>
                  
            </div>

        </main>
    </>
    )
  }
}

const mapStateToProps = state => {

    return {
        state: state.user
    }
}

export default connect(mapStateToProps)(Account);