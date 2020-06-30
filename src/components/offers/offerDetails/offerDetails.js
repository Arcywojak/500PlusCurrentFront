import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getOffers, testingRedux} from '../../../actions/offerActions';
import './offerDetails.css';
import needle from '../../../images/Boy Avatar.svg';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class OfferDetails extends Component{

    static propTypes = {
        getOffers: PropTypes.func.isRequired,
        testingRedux: PropTypes.func.isRequired,
        offer:PropTypes.object
    }

    componentDidMount(){

        this.props.testingRedux(3)
        if(this.props.offer === undefined){
            this.props.getOffers();
        }
    }

    state={

        actualImage : 'Boy Avatar.svg',

        listOfImages:[
            'Boy Avatar.svg',
            'a.png',
            'hot.png'
        ],

        addProductInfo:false,

        dummy_offers :[
                {id:0, itemName:'Autyzm w płynie', price:1337, givenPrice:699, hots:50, imgUrl:"needle.jpg", category:'Ubranka', siteUrl:"www.antyszczepionkowcy.pl", description:"Poznaj cudowny koniec twoich zmartwień! Jeden cudowny zastrzyk i możesz więcej się nie przejmowac swoim dzieckiem"},
                {id:1, itemName:'Rowerek', price:1500, givenPrice:'', hots:0, imgUrl:"twarz.png", category:'Ubranka', siteUrl : "www.rowerek.com", description:"Zawsze marzyłeś żeby uciec z domu? Ten szybki rowerek zatem jest wszystkim czego ci trzeba! Cyk dwójeczka i nikt cię nie dogoni piracie drogowy!"},
                {id:2, itemName:'Dezodorant', price:50, givenPrice:5, hots:666, imgUrl:"logo.png", category:'Ubranka', siteUrl:"www.umyjsię.pl", description:"Co tu dużo mówić, skoro można poczuć"},
                {id:3, itemName:'Shrek', price:999, givenPrice:1, hots:69, imgUrl:"share.png", category:'Ubranka', siteUrl:"www.seksi.pl", description:"Uwaga. Jest to produkt skierowany dla dzieci 18+. Nie zaleca się kąpania w błocie i trzymania osła w domu"},
                {id:4, itemName:'lalka', price:5, givenPrice:699, hots:420, imgUrl:"item.png", category:'Ubranka', siteUrl:"www.lalka.pl", description: "Zwykła, nudna lalka, nie miałem już weny"} ,
                {id:5, itemName:'Gra komputerowa', price:144, givenPrice:699, hots:1337, imgUrl:"item.png", category:'Jedzenie', siteUrl:"www.grytworząterrorystów.pl", description:"Czy chcesz u siebie w domu wyszkolić małego terrorystę? W takim razie to produkt dla Ciebie! Drogi rodzicu, ta gra z gatunku FPS przygotuję twoją pociechę nawet na III wojnę światową"},
        ]
    }

    addProduct = () => {

        if(!this.state.addProductInfo){
            this.setState({
                addProductInfo:true
            })

            setTimeout(() => {
                if(this.state.addProductInfo){
                    this.setState({
                        addProductInfo:false
                    })
                }
            },3000)
        }
    }

    render(){

        console.log(this.props.offer)

        const {id} = this.props
        
        const addProductMessage = this.state.addProductInfo ? (

        <div className="product-added-info">
            <div className="product-added-info-icon">
                <i className="fas fa-cart-arrow-down"></i>
            </div>
            <div className="product-added-info-text">
               Dodano(1) rzeczy do koszyka! 
            </div>
        </div>

        ) : (null)

        const listOfImages = this.state.listOfImages ? this.state.listOfImages.map((image, index) => {
            let borderRight = this.state.listOfImages.length-1 !== index ? ('border-right') : ('')
                return (
                    <div className={`single-image ${borderRight}`}>
                        <img src={require(`../../../images/${image}`)} alt="zdjecie" />
                    </div>
                )
            }
            
        ) : (null)
 
      
        const actualImage =  <img src={require(`../../../images/${this.state.actualImage}`)} alt="zdjęcie oferty" className="item-details-img"/>
        

        const offer = this.props.offer
    return(

        <div className="item-details-container">

            { /*******************  FLYING  **************************** */}

                    {addProductMessage}

                { /*********************************************** */}

            <Link to="/oferty">
                <button className="back-to-offer-list">
                <i className="fas fa-chevron-left icon"></i>  POWRÓT
                </button>
            </Link>
            

            <div className="item-details-title">
                <h1 className="item-details-title-main">Morska krótka sukienka</h1>
                <h3 className="item-details-title-extra">NASZ WYBÓR!</h3>
            </div>

            <div className="item-details-inner">
                <div className="item-details-inner-1st">

                <img src={offer?.image} alt="zdjęcie oferty" className="item-details-img"/>

                
                    <div className='item-details-inner-1st-image-list'>
                        {listOfImages}
                    </div>
                    
                </div>
                <div className="item-details-inner-2nd">
                        <h2 className="item-details-inner-title">
                            OFERT SĄ BEZ TYTUŁU
                        </h2>
                        <p className="item-details-inner-content">
                            {offer?.description}
                        </p>
                        <div className="item-details-inner-price-and-stars-block">
                            <p className="price">
                                {offer?.price}
                             </p>
                            <div className="stars">
                                GWIAZDKI
                            </div>
                        </div>

                        <div className="item-details-inner-two-buttons">
                            <button onClick={this.addProduct} className="btn purple">
                                <i className="fas fa-shopping-cart icon"></i>  DO KOSZYKA
                            </button>
                            <button className="btn gray">
                                <i className="fas fa-play icon"></i>   KUP TERAZ
                            </button>
                        </div>

                        <div className="item-details-link">
                        <a href={offer?.product_url} target="_blank">{offer?.product_url}</a>
                        </div>
                        
                </div>
            </div>
        </div>
    )}
}

const mapStateToProps = (state, ownProps) => {

    return{
        offer: state.offer.offers.find(offer => offer._id === ownProps.id)
    }
}

export default connect(mapStateToProps, {getOffers, testingRedux})(OfferDetails)