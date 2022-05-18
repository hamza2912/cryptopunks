import { set, getDatabase, ref, onValue } from 'firebase/database';
import React from 'react';

function Home() {

  const [emailList, setemailList] = React.useState([]);
  const [email, setemail] = React.useState('');
  const db = getDatabase();

  const [skin, setskin] = React.useState(['Skin 1', 'Skin 2', 'Skin 3', 'Skin 4', 'Alien', 'Orc', 'Ghoul', 'Zombie', 'Ape', 'Outline']);
  const [skinIter, setskinIter] = React.useState(0);
  
  const [hat, sethat] = React.useState(['None', 'Wizards hat', 'Cap', 'Blonde Messy', 'Messy hair', 'Top hat', 'Bandana', 'Crazy Hairs' ,'Crown' ,'Stringly hairs' ,'Wild Hairs', 'Frumpy hairs' ,'Mohawk Thin', 'Mohawk' ,'Mohawk Dark' ,'Knitted cap' ,'Red Hair' ,'Peak Spike' ,'Shaved Head' ,'Do-rag' ,'Hoodie', 'Cap Forward', 'Police Cap', 'Fedora', 'Purple hair' ,'Clown Hair', 'Vampire hair', 'Cowboy Hat' ,'Top hat', 'Beanie'] );
  const [hatIter, sethatIter] = React.useState(0);
  
  const [eyes, seteyes] = React.useState(['Normal', 'Lazer Eyes', 'Dead Eyes' , 'Long Eyes', 'Blue Eyes', 'Red Eyes', 'Clown Eyes Green']);
  const [eyesIter, seteyesIter] = React.useState(0);

  const [eyewear, seteyewear] = React.useState(['None', 'Nerd Glasses' , 'Sunglasses 1', 'Big Shades', '3D Glasses' , 'Eye Mask' , 'Homed Rim Glasses' , 'Normal Shades', 'Classis Shades' ,'Eye Patch' ,'Small Shades' ,'Black Eye', 'VR', 'Robber', 'Blindfold']);
  const [eyewearIter, seteyewearIter] = React.useState(0);
  
  const [hair, sethair] = React.useState(['Standard', 'Muttonchop', 'Goat' ,'Normal Beard' ,'Normal Beard Black', 'Mustache' ,'Luxurious Beard', 'Chain Strap', 'Front Beard Black', 'Front Beard', 'Handlebars' ,'Big Beard' ,'Shadow beard']);
  const [hairIter, sethairIter] = React.useState(0);
  
  const [mouth, setmouth] = React.useState(['Standard','Frown' ,'Bandana Mask','Smile', 'One Tooth', 'Big Mouth' ,'Vampire' ,'Tongue Out', 'Big lips' ,'Buck Teeth']);
  const [mouthIter, setmouthIter] = React.useState(0);
  
  const [other, setother] = React.useState(['None', 'Headphones' ,'Earrings' ,'Cigarettes', 'Mole', 'Headband' ,'Pipe', 'Vape' ,'Clown Nose' ,'Medical Mask', 'Gold Chain' ,'Silver Chain' ,'Rosy', 'Spots', 'Cross' ,'Handband Red']);
  const [otherIter, setotherIter] = React.useState(0);
  
  const [background, setbackground] = React.useState(['bg-standard', 'bg-standard', 'bg-orange', 'bg-yellow', 'bg-red', 'bg-green', 'bg-pinkk', 'bg-purple', 'bg-dark-blue', 'bg-light-blue', 'bg-grey']);
  const [backgroundIter, setbackgroundIter] = React.useState(0);
  
  React.useEffect(() => {
    const emails = ref(db, `emailList/`);
    onValue(emails, (snapshot) => {
        if(snapshot.val()){
            setemailList(snapshot.val());
        }
    });
  },[]);

  function submitEmail(email) {
    if(email != ''){
    var emails = emailList;
    emails.push(email);
    set(ref(db, 'emailList'), emails);
    setemail('');
    alert('Thank you for subscribing!');
    }
  }


  function nextItem(attr, iter, attr_name){
    if(iter + 1 >= attr.length ){
      attr_name == 'skin' ? setskinIter(0) : attr_name == 'hair' ? sethairIter(0) : attr_name == 'eyes' ? seteyesIter(0) : attr_name == 'other' ? setotherIter(0) : attr_name == 'mouth' ? setmouthIter(0) : attr_name == 'hat' ? sethatIter(0) : attr_name == 'eyewear' ? seteyewearIter(0) : setbackgroundIter(0) 
    } else{
      attr_name == 'skin' ? setskinIter(iter + 1) : attr_name == 'hair' ? sethairIter(iter + 1) : attr_name == 'eyes' ? seteyesIter(iter + 1) : attr_name == 'other' ? setotherIter(iter + 1) : attr_name == 'mouth' ? setmouthIter(iter + 1) : attr_name == 'hat' ? sethatIter(iter + 1) : attr_name == 'eyewear' ? seteyewearIter(iter + 1) : setbackgroundIter(iter + 1)
    }
  }

  function prevItem(attr, iter, attr_name){
    if(iter - 1 < 0){
      attr_name == 'skin' ? setskinIter(attr.length -1) : attr_name == 'hair' ? sethairIter(attr.length -1) : attr_name == 'eyes' ? seteyesIter(attr.length -1) : attr_name == 'other' ? setotherIter(attr.length -1) : attr_name == 'mouth' ? setmouthIter(attr.length -1) : attr_name == 'hat' ? sethatIter(attr.length -1) : attr_name == 'eyewear' ? seteyewearIter(attr.length -1) : setbackgroundIter(attr.length -1)
    } else{
      attr_name == 'skin' ? setskinIter(iter - 1) : attr_name == 'hair' ? sethairIter(iter - 1) : attr_name == 'eyes' ? seteyesIter(iter - 1) : attr_name == 'other' ? setotherIter(iter - 1) : attr_name == 'mouth' ? setmouthIter(iter - 1) : attr_name == 'hat' ? sethatIter(iter - 1) : attr_name == 'eyewear' ? seteyewearIter(iter - 1) : setbackgroundIter(iter - 1)
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function randomize(){
    setskinIter(getRandomInt(skin.length))
    setbackgroundIter(getRandomInt(background.length))
    sethatIter(getRandomInt(hat.length))
    seteyesIter(getRandomInt(eyes.length))
    seteyewearIter(getRandomInt(eyewear.length))
    setmouthIter(getRandomInt(mouth.length))
    sethairIter(getRandomInt(hair.length))
    setotherIter(getRandomInt(other.length))
  }

    return (

      <>
      
      <div className='container px-5 mx-auto overflow-x-hidden'>
        <header className='w-full flex lg:flex-row flex-col justify-between lg:py-20 py-8'>
          <div className='logo flex flex-col'>
            <h1 className='lg:text-4xl text-2xl font-bold'>degenerated.co</h1>
            <p className='lg:text-2xl text-xl font-semibold'>Cryptopunk generator.</p>
          </div>
          <a href="https://coinrule.com/?fp_ref=joe96" target="_blank"><img className='w-add1 mt-2 lg:mt-0' src="images/ads/add4.png" alt="Wide Selection of Crypto Contracts" /></a>
        </header>
        <section className='flex lg:flex-row flex-col-reverse mb-5'>
          <div className='lg:w-1/2 w-full grid grid-cols-2 mt-5 lg:mt-0'>
            <div className='flex flex-col'>
              <h3 className='mb-10 font-semibold lg:text-lg text-base'>Attributes</h3>
              <p className='lg:text-xl text-base'>SKIN</p>
              <p className='lg:text-xl text-base mt-2'>EYES</p>
              <p className='lg:text-xl text-base mt-2'>EYE WEAR</p>
              <p className='lg:text-xl text-base mt-2'>MOUTH</p>
              <p className='lg:text-xl text-base mt-2'>FACIAL HAIR</p>
              <p className='lg:text-xl text-base mt-2'>HAT/ HAIR</p>
              <p className='lg:text-xl text-base mt-2'>OTHER</p>
              <p className='lg:text-xl text-base mt-2'>Background</p>
              <button onClick={()=>randomize()} className='lg:w-1/2 w-full px-4 py-2 bg-pink text-white mt-16 font-semibold'>Randomize</button>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-center mb-10 font-semibold lg:text-lg text-base'>Select</h3>
              <div className='flex justify-between items-center'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(skin, skinIter, 'skin')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{skin[skinIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(skin , skinIter, 'skin')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(eyes, eyesIter, 'eyes')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{eyes[eyesIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(eyes , eyesIter, 'eyes')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(eyewear, eyewearIter, 'eyewear')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{eyewear[eyewearIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(eyewear , eyewearIter, 'eyewear')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(mouth, mouthIter, 'mouth')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{mouth[mouthIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(mouth , mouthIter, 'mouth')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(hair, hairIter, 'hair')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{hair[hairIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(hair , hairIter, 'hair')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(hat , hatIter, 'hat')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink'>{hat[hatIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(hat , hatIter, 'hat')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(other, otherIter, 'other')}></i>
                <p className='text-center lg:text-xl text-base font-semibold text-pink mt-0'>{other[otherIter]}</p>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(other , otherIter, 'other')}></i>
              </div>
              <div className='flex justify-between items-center mt-2'>
                <i className='cursor-pointer fas fa-angle-left' onClick={()=>prevItem(background, backgroundIter)}></i>
                  <div className={'w-10 h-8 mx-auto ' + background[backgroundIter]}></div>
                <i className='cursor-pointer fas fa-angle-right' onClick={()=>nextItem(background, backgroundIter)}></i>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full lg:pl-40'>
            <div className={'w-full h-96 flex justify-center items-end ' + background[backgroundIter]} >
              <div className='w-96 relative'>
                
                <img className='w-full h-auto' src={skin[skinIter] == 'Outline' ? 'images/skins/punk_0002s_0009_Base-Layer.png' : skin[skinIter] == 'Skin 1' ? 'images/skins/punk_0002s_0003_Skin-1.png': skin[skinIter] == 'Skin 2' ? 'images/skins/punk_0002s_0002_Skin-2.png': skin[skinIter] == 'Skin 3' ? 'images/skins/punk_0002s_0001_Skin-3.png': skin[skinIter] == 'Skin 4' ? 'images/skins/punk_0002s_0000_Skin-4.png': skin[skinIter] == 'Alien' ? 'images/skins/punk_0002s_0008_Alien.png': skin[skinIter] == 'Orc' ? 'images/skins/punk_0002s_0004_Orc.png': skin[skinIter] == 'Ghoul' ? 'images/skins/punk_0002s_0005_Ghoul.png': skin[skinIter] == 'Ape' ? 'images/skins/punk_0002s_0006_Ape.png': skin[skinIter] == 'Zombie' ? 'images/skins/punk_0002s_0007_Zombie.png':  null} alt="Skins" />

                { hat[hatIter] != 'None' ? <img className='w-full h-auto absolute top-0' src={hat[hatIter] == 'Wizards hat' ? 'images/hat/Hats-punk_0000s_0000_Wizards-hat.png' : hat[hatIter] == 'Cap' ? 'images/hat/Hats-punk_0000s_0001_Cap.png' : hat[hatIter] == 'Messy hair' ? 'images/hat/Hats-punk_0000s_0003_Messy-Hair.png' : hat[hatIter] == 'Blonde Messy' ? 'images/hat/Hats-punk_0000s_0002_Blonde-Messy.png' : hat[hatIter] == 'Top hat' ? 'images/hat/Hats-punk_0000s_0004_Top-Hat.png' : hat[hatIter] == 'Bandana' ? 'images/hat/Hats-punk_0000s_0005_Bandana.png' : hat[hatIter] == 'Crazy Hairs' ? 'images/hat/Hats-punk_0000s_0007_Crazy-Hair.png' : hat[hatIter] == 'Crown' ? 'images/hat/Hats-punk_0000s_0009_Crown.png' : hat[hatIter] == 'Stringly hairs' ? 'images/hat/Hats-punk_0000s_0010_Stringly-Hair.png' : hat[hatIter] == 'Wild Hairs' ? 'images/hat/Hats-punk_0000s_0011_Wild-Hair.png' : hat[hatIter] == 'Frumpy hairs' ? 'images/hat/Hats-punk_0000s_0012_Frumpy-Hair.png' : hat[hatIter] == 'Mohawk Thin' ? 'images/hat/Hats-punk_0000s_0013_Mohawk-Thin.png' : hat[hatIter] == 'Mohawk' ? 'images/hat/Hats-punk_0000s_0014_Mohawk.png' : hat[hatIter] == 'Mohawk Dark' ? 'images/hat/Hats-punk_0000s_0015_Mohawk-Dark.png' : hat[hatIter] == 'Knitted cap' ? 'images/hat/Hats-punk_0000s_0016_Knitted-Cap.png' : hat[hatIter] == 'Red Hair' ? 'images/hat/Hats-punk_0000s_0017_Red-Hair.png' : hat[hatIter] == 'Peak Spike' ? 'images/hat/Hats-punk_0000s_0018_Peak-Spike.png' : hat[hatIter] == 'Shaved Head' ? 'images/hat/Hats-punk_0000s_0019_Shaved-Head.png' : hat[hatIter] == 'Do-rag' ? 'images/hat/Hats-punk_0000s_0020_Do-Rag.png' : hat[hatIter] == 'Hoodie' ? 'images/hat/Hats-punk_0000s_0021_Hoodie.png' : hat[hatIter] == 'Cap Forward' ? 'images/hat/Hats-punk_0000s_0022_Cap-Forward.png' : hat[hatIter] == 'Police Cap' ? 'images/hat/Hats-punk_0000s_0023_Police-Cap.png' : hat[hatIter] == 'Fedora' ? 'images/hat/Hats-punk_0000s_0024_Fedora.png' : hat[hatIter] == 'Purple hair' ? 'images/hat/Hats-punk_0000s_0025_Purple-Hair.png' : hat[hatIter] == 'Clown Hair' ? 'images/hat/Hats-punk_0000s_0026_Clown-Hair.png' : hat[hatIter] == 'Vampire hair' ? 'images/hat/Hats-punk_0000s_0027_Vampire-Hair.png' : hat[hatIter] == 'Cowboy Hat' ? 'images/hat/Hats-punk_0000s_0028_Cowboy-Hat.png' : 'images/hat/Hats-punk_0000s_0031_Beanie.png'} alt="Hat/ Hair" /> : null}

                { eyes[eyesIter] != 'Normal' ? <img className='w-full h-auto absolute top-0' src={eyes[eyesIter] == 'Lazer Eyes' ? 'images/eyes/punk_0000s_0004s_0000_Lazer-eyes.png' : eyes[eyesIter] == 'Dead Eyes' ? 'images/eyes/punk_0000s_0004s_0001_Dead-Eyes.png' : eyes[eyesIter] == 'Long Eyes' ? 'images/eyes/punk_0000s_0004s_0002_Long-eyes.png' : eyes[eyesIter] == 'Blue Eyes' ? 'images/eyes/punk_0000s_0004s_0004_Blue-Eyes.png' : eyes[eyesIter] == 'Red Eyes' ? 'images/eyes/punk_0000s_0004s_0005_Red-eyes.png' : 'images/eyes/punk_0000s_0004s_0006_Clown-Eyes-Green.png'} alt="Eyes" /> : null}
                
                { eyewear[eyewearIter] != 'None' ? <img className='w-full h-auto absolute top-0' src={eyewear[eyewearIter] == 'Nerd Glasses' ? 'images/eyes/punk_0000s_0003s_0000_Nerd-Glasses.png' : eyewear[eyewearIter] == 'Sunglasses 1' ? 'images/eyes/punk_0000s_0003s_0001_Sunglasses-1.png' : eyewear[eyewearIter] == 'Big Shades' ? 'images/eyes/punk_0000s_0003s_0002_Big-Shades.png' : eyewear[eyewearIter] == '3D Glasses' ? 'images/eyes/punk_0000s_0003s_0003_3D-Glasses.png' : eyewear[eyewearIter] == 'Normal Shades' ? 'images/eyes/punk_0000s_0003s_0006_Normal-Shades.png' : eyewear[eyewearIter] == 'Eye Mask' ? 'images/eyes/punk_0000s_0003s_0004_Eye-Mask.png' : eyewear[eyewearIter] == 'Homed Rim Glasses' ? 'images/eyes/punk_0000s_0003s_0005_Horned-Rim-Glasses.png' : eyewear[eyewearIter] == 'Classis Shades' ? 'images/eyes/punk_0000s_0003s_0007_Classic-Shades.png' : eyewear[eyewearIter] == 'Eye Patch' ? 'images/eyes/punk_0000s_0003s_0008_Eye-Patch.png' : eyewear[eyewearIter] == 'Small Shades' ? 'images/eyes/punk_0000s_0003s_0009_Small-Shades.png' : eyewear[eyewearIter] == 'Black Eye' ? 'images/eyes/punk_0000s_0003s_0010_Black-eye.png' : eyewear[eyewearIter] == 'VR' ? 'images/eyes/punk_0000s_0003s_0011_VR.png' : eyewear[eyewearIter] == 'Robber' ? 'images/eyes/punk_0000s_0003s_0012_Robber.png' : 'images/eyes/punk_0000s_0003s_0013_Blindfold.png'} alt="Eye Wear" /> : null}
                
                { mouth[mouthIter] != 'Standard' ? <img className='w-full h-auto absolute top-0' src={mouth[mouthIter] == 'Frown' ? 'images/mouth/punk_0000s_0001s_0000_Frown.png' : mouth[mouthIter] == 'Bandana Mask' ? 'images/mouth/punk_0000s_0001s_0001_Bandana-Mask.png' : mouth[mouthIter] == 'Smile' ? 'images/mouth/punk_0000s_0001s_0002_Smile.png' : mouth[mouthIter] == 'One Tooth' ? 'images/mouth/punk_0000s_0001s_0003_One-tooth.png' : mouth[mouthIter] == 'Big Mouth' ? 'images/mouth/punk_0000s_0001s_0004_Big-mouth.png' : mouth[mouthIter] == 'Vampire' ? 'images/mouth/punk_0000s_0001s_0005_Vampire.png' : mouth[mouthIter] == 'Tongue Out' ? 'images/mouth/punk_0000s_0001s_0006_Tongue-Out.png' : mouth[mouthIter] == 'Big lips' ? 'images/mouth/punk_0000s_0001s_0007_Big-lips.png' : 'images/mouth/punk_0000s_0001s_0009_Buck-Teeth.png'} alt="" /> : null}
                
                { hair[hairIter] != 'Standard' ? <img className={'w-full h-auto absolute top-0' + (hair[hairIter] == 'Shadow beard' ? ' -left-px' : '')} src={hair[hairIter] == 'Muttonchop' ? 'images/hair/punk_0000s_0002s_0000_Muttonchop.png' : hair[hairIter] == 'Goat' ? 'images/hair/punk_0000s_0002s_0001_Goat.png' : hair[hairIter] == 'Normal Beard' ? 'images/hair/punk_0000s_0002s_0002_Normal-Beard.png' : hair[hairIter] == 'Normal Beard Black' ? 'images/hair/punk_0000s_0002s_0003_Normal-Beard-Black.png' : hair[hairIter] == 'Mustache' ? 'images/hair/punk_0000s_0002s_0004_Mustache.png' : hair[hairIter] == 'Luxurious Beard' ? 'images/hair/punk_0000s_0002s_0005_Luxurious-Beard.png' : hair[hairIter] == 'Chain Strap' ? 'images/hair/punk_0000s_0002s_0006_Chain-Strap.png' : hair[hairIter] == 'Front Beard Black' ? 'images/hair/punk_0000s_0002s_0007_Front-Beard.png' : hair[hairIter] == 'Front Beard' ? 'images/hair/punk_0000s_0002s_0011_Front-Beard.png' : hair[hairIter] == 'Handlebars' ? 'images/hair/punk_0000s_0002s_0008_Handlebars.png' : hair[hairIter] == 'Big Beard' ? 'images/hair/punk_0000s_0002s_0009_Big-Beard.png' : 'images/hair/punk_0000s_0002s_0010_Shadow-Beard.png'} alt="Beard" /> : null}

                { other[otherIter] != 'None' ? <img className='w-full h-auto absolute top-0' src={other[otherIter] == 'Headphones' ? 'images/other/punk_0000s_0000s_0000_Headphones.png' : other[otherIter] == 'Headphones' ? 'images/other/punk_0000s_0000s_0000_Headphones.png' : other[otherIter] == 'Earrings' ? 'images/other/punk_0000s_0000s_0001_Earring.png' : other[otherIter] == 'Cigarettes' ? 'images/other/punk_0000s_0000s_0002_Cigarettes.png' : other[otherIter] == 'Mole' ? 'images/other/punk_0000s_0000s_0003_Mole.png' : other[otherIter] == 'Headband' ? 'images/other/punk_0000s_0000s_0004_Headband.png' : other[otherIter] == 'Pipe' ? 'images/other/punk_0000s_0000s_0005_Pipe.png' : other[otherIter] == 'Vape' ? 'images/other/punk_0000s_0000s_0006_Vape.png' : other[otherIter] == 'Clown Nose' ? 'images/other/punk_0000s_0000s_0007_Clown-Nose.png' : other[otherIter] == 'Medical Mask' ? 'images/other/punk_0000s_0000s_0008_Medical-Mask.png' : other[otherIter] == 'Gold Chain' ? 'images/other/punk_0000s_0000s_0009_Gold-Chain.png' : other[otherIter] == 'Silver Chain' ? 'images/other/punk_0000s_0000s_0010_Silver-Chain.png' : other[otherIter] == 'Rosy' ? 'images/other/punk_0000s_0000s_0011_Rosy-Cheeks.png' : other[otherIter] == 'Spots' ? 'images/other/punk_0000s_0000s_0012_Spots.png' : other[otherIter] == 'Cross' ? 'images/other/punk_0000s_0000s_0013_Cross.png' : 'images/other/punk_0000s_0000s_0014_Headband-Red.png'} alt="" /> : null}
              </div>
            </div>
            <div className='w-full flex justify-end mt-2'>
              <p className='font-bold lg:text-lg text-base'>Screenshot to save.</p>
              </div>  
          </div>
        </section>
        <hr />
        <section className='flex justify-between lg:flex-row flex-col-reverse py-10'>
          <div className='flex flex-col lg:w-1/2 w-full font-semibold mt-5 lg:mt-0'>
            <p>You do not own this as an NFT if you screenshot it.</p>
            <p>None of this is proof of ownership. Just for fun.</p>
            <p>We'll use your email to update you about any other fun future projects.</p>
            <p className='my-5'>Visit <a className='text-blue-400' href="https://larvalabs.com/cryptopunks" target='_blank'>larvalabs.com/cryptopunks</a> to buy</p>
            {/* <p className='my-5 text-xl font-bold'>Contact us on twitter <a href="https://twitter.com/degener8ed" target="_blank"><i className='fab fa-twitter text-blue-400'></i></a></p>
            <ul>
              <li>Advertising</li>
              <li>Privacy Policy</li>
              <a href="https://twitter.com/degener8ed" target="_blank" ><li>Contact</li></a> 
            </ul> */}
            <p className='my-5'>Get updates on future projects.</p>
            <div className='lg:w-4/5 w-full grid grid-cols-3 mt-5 lg:mt-0'>
              <input type="email"  value={email} onChange={event=>setemail(event.target.value)} className='px-4 col-span-2 border border-black' placeholder='Email' />
              <button onClick={()=>submitEmail(email)} className='px-4 py-2 bg-pink text-white font-semibold'>Subscribe</button>
            </div>
          </div>
          <a href="https://coinrule.com/?fp_ref=joe96" target="_blank"><img className='w-add2' src="images/ads/add3.png" alt="Binance" /></a>

        </section>


      </div>

      <footer className='bg-gray-600 overflow-x-hidden'>
        <div className='container p-5 mx-auto text-white'>
            <p className='my-5 text-xl font-bold text-center lg:text-left'>Contact us on twitter <a href="https://twitter.com/degener8ed" target="_blank"><i className='fab fa-twitter text-blue-400'></i></a></p>
            <ul>
              <a href="https://twitter.com/degener8ed" target="_blank" ><li className='text-center lg:text-left'>Advertising</li></a> 
              <a href="https://twitter.com/degener8ed" target="_blank" ><li className='text-center lg:text-left'>Privacy Policy</li></a>
              <a href="https://twitter.com/degener8ed" target="_blank" ><li className='text-center lg:text-left'>Contact</li></a> 
            </ul>

        </div>
      </footer>

      </>

    );
  }
  
export default Home;
