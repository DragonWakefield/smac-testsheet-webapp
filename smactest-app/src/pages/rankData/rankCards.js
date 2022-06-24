const Basics = {
    title: 'Basic',
    ranks: [{name: 'White', color: 'white', stripe: false, id: 'White'}, {name: 'Yellow', color:'#ffeb3b', stripe: false, id: 'Yellow'}, {name: 'Orange', color: 'orange', stripe: false, id: 'Orange'}],
    bg: ['#ffc107','#ffeb3b'],
    color: 'black'
  }
  
  const Level1 = {
    title: 'Level 1',
    ranks: [{name: 'Purple', color: '#673ab7', stripe: false, id: 'Purple'}, {name: 'Blue', color: '#2196f3', stripe: false, id: 'Blue'}, {name: 'Blue with Stripe', color: '#2196f3', stripe: '#008b02', stripeNum: 1, id: 'BlueSt'}],
    bg: ['#673ab7','#00bcd4'],
    color: 'white'
  }
  
  const Level2 = {
    title: 'Level 2',
    ranks: [{name: 'Green', color: '#008b02', stripe: false, id: 'Green'}, {name: 'Green with Stripe', color: '#008b02', stripe: '#5d4037', stripeNum: 1, id: 'GreenSt'}, {name: 'Green with 2 Stripes', color: '#008b02', stripe: '#5d4037', stripeNum: 2, id: 'GreenSt2'}],
    bg: ['#006400','#4caf50'],
    color: 'white'
  }
  
  const Level3 = {
    title: 'Level 3',
    ranks: [{name: 'Brown', color: '#5d4037', stripe: false, id: 'Brown'}, {name: 'Brown with Stripe', color: '#5d4037', stripe: 'black', stripeNum: 1, id: 'BrownSt'}, {name: 'Brown with 2 Stripes', color: '#5d4037', stripe: 'black', stripeNum: 2, id: 'BrownSt2'}],
    bg: ['#654321','#BD9168'],
    color: 'white'
  }
  
  const allRanks = [Basics, Level1, Level2, Level3]

  export default allRanks