// import { ref, computed } from 'vue'
new Vue({
    el: '#app',
    data:{
        items:[
            // {id:1, lable:"book", purchased: fasle, highPriority:false},
            // {id:2, lable:"bread",purchased: false, highPriority:false},
            // {id:3,lable:"milk", purchased:false, highPriority:true},
        ],
        editing:false,
        header:'Shopping List App',
        newItem:'',
        newItemPriority:false,
        
    }, 
    computed:{
        characterCount:function(){
          return this.newItem.length;
        },
        reverseItems:function(){
          return [...this.items].reverse()
        },
        
    },

    methods:{
        saveItem(){
            this.items.push({id:this.items.length+1, lable: this.newItem, purchased:false, highPriority: this.newItemPriority});
            this.newItem = "";
            this.newItemPriority ="";
          },
        doEdit(e){
              this.editing = e;
              this.newItem = "";
              this.newItemPriority ="";
          },
        togglePurchased(item){
                item.purchased = !item.purchased
          },

    }
})

