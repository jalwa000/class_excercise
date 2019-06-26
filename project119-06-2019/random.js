function start()
{myImgs = [
    "../project3/dice1.jpg",
    "../project3/dice2.jpg",
    "../project3/dice3.jpg",
    "../project3/dice4.jpg",
    "../project3/dice5.jpg",
    "../project3/dice6.jpg"
 ];
 myRandomNum = Math.floor(Math.random() *6);
 console.log(myImgs[myRandomNum]);
 document.getElementById('pic').src = myImgs[myRandomNum];}