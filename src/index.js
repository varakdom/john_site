import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './component/helloWorld';
import './index.css';



const Body = () => {
    return(
        <div id="Body">
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}

const Header = () =>{
    return(
        <div id="header">
                <div id="logo">
                    <img src="image/\Logo de clinique.JPG" alt="Logo de la clinique" />    
                </div>
                <h1>Clinique Matunzo Bora</h1>
                <h2>L'excellence et les soins de qualité</h2>
            
            <div class="topnav">
                <a href="#">Accueil</a>
                <a href="#">horaire</a>
                <a href="#">administrations</a>
                <a href="#">Contact</a>
                <a href="#">Services</a>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>

            <div id="banniere_image">
                <div id="banniere_description">
                    maquettes de la clinique
                    <a href="image\maquette des cliniques.png" class="bouton_rouge" target="_blank">Voir l'article <img src="image/flecheblanchedroite.png" alt="" /></a>
                </div>
            </div>
        </div>
        
    );
}

const Section = () =>{
    return (
        <section>
            <article>
                <h1><img src="image/ico_epingle.png" alt="Catégorie voyage" class="ico_categorie" />Je suis un grand voyageur</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec sagittis massa. Nulla facilisi. Cras id arcu lorem, et semper purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel enim mi, in lobortis sem. Vestibulum luctus elit eu libero ultrices id fermentum sem sagittis. Nulla imperdiet mauris sed sapien dignissim id aliquam est aliquam. Maecenas non odio ipsum, a elementum nisi. Mauris non erat eu erat placerat convallis. Mauris in pretium urna. Cras laoreet molestie odio, consequat consequat velit commodo eu. Integer vitae lectus ac nunc posuere pellentesque non at eros. Suspendisse non lectus lorem.</p>
                <p>Vivamus sed libero nec mauris pulvinar facilisis ut non sem. Quisque mollis ullamcorper diam vel faucibus. Vestibulum sollicitudin facilisis feugiat. Nulla euismod sodales hendrerit. Donec quis orci arcu. Vivamus fermentum magna a erat ullamcorper dignissim pretium nunc aliquam. Aenean pulvinar condimentum enim a dignissim. Vivamus sit amet lectus at ante adipiscing adipiscing eget vitae felis. In at fringilla est. Cras id velit ut magna rutrum commodo. Etiam ut scelerisque purus. Duis risus elit, venenatis vel rutrum in, imperdiet in quam. Sed vestibulum, libero ut bibendum consectetur, eros ipsum ultrices nisl, in rutrum diam augue non tortor. Fusce nec massa et risus dapibus aliquam vitae nec diam.</p>
                <p>Phasellus ligula massa, congue ac vulputate non, dignissim at augue. Sed auctor fringilla quam quis porttitor. Praesent vitae dignissim magna. Pellentesque quis sem purus, vel elementum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas consectetur euismod urna. In hac habitasse platea dictumst. Quisque tincidunt porttitor vestibulum. Ut iaculis, lacus at molestie lacinia, ipsum mi adipiscing ligula, vel mollis sem risus eu lectus. Nunc elit quam, rutrum ut dignissim sit amet, egestas at sem.</p>
            </article>
            <aside>
                <h1>Nos valeur </h1>
                <img src="../src/image/bulle.png" alt="" id="fleche_bulle" />
                <p>Laisse-moi le temps de me présenter&nbsp;: je m'appelle Zozor, je suis né un 23 novembre 2005.</p>
                <p>Bien maigre, n'est-ce pas ? C'est pourquoi, aujourd'hui, j'ai décidé d'écrire ma biographie afin que vous sachiez qui je suis réellement.</p>
                <p id="reseaux_sociaux"><img src="image/facebook.png" alt="Facebook" /><img src="image/twitter.png" alt="Twitter" /><img src="image/vimeo.png" alt="Vimeo" /><img src="image/flickr.png" alt="Flickr" /><img src="image/rss.png" alt="RSS" /></p>
            </aside>
        </section>
    )
}

const Footer = () =>{
    return (
        <footer>
            <div id="mes_photos">
                <h1>Fondateur</h1>
                <p><a href="image/dieudonné agrandi.jpg" target="_blank" ><img src="image/photo dieudonné.jpg" alt="Dieudonné"  />Dieudonné Biheye </a></p>
                <p><a href="image/john agrandi.JPG" target="_blank" ><img src="image/photo john.jpg"  alt="john"/>John Kivukuto</a></p>
            </div>
            <div id="mes_amis">
                <h1>Partenaires</h1>
                <div id="listes_amis">
                    <ul>
                        <li><a href="#">Pupi le lapin</a></li>
                        <li><a href="#">Mr Baobab</a></li>
                        <li><a href="#">Kaiwaii</a></li>
                        <li><a href="#">Perceval.eu</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">Belette</a></li>
                        <li><a href="#">Le concombre masqué</a></li>
                        <li><a href="#">Ptit prince</a></li>
                        <li><a href="#">Mr Fan</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
ReactDOM.render(
    <Body />,
    document.getElementById('root')
);