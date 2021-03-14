export default{
    state:{
        fruits:[
            {name:"apple",price:3,amount:0},
            {name:"orange",price:2,amount:0},
            {name:"banana",price:1,amount:0}
        ],
        totalPrice:0
    },
    setTotalPrice(price){
        this.state.totalPrice=price;
    },
    getTotalPrice(){
        return this.state.totalPrice;
    },
    reset(){
        this.state.fruits.forEach(e => {
            e.amount=0;
        });
        this.state.totalPrice=0;
    }
}