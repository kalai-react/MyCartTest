import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import './test.css';

import Home from './pages/home';
import CartPage from './pages/cart';
import jsonData from './data.json';

export default class App extends React.Component {

   constructor(props) {
      super(props);
      let itemList = jsonData && jsonData.items && jsonData.items.map(function(item, index){
         item.id = index;
         return item;
      });

      this.state = {
         cartCount: 0,
         selectedProduct: [],
         dataList: itemList || [],
         sortOption: 1,
         searchTxt: '',
         minPrice: 1,
         maxPrice: 100000
      }
   }

   changeSortOption = (selectedOption) => {
      if(this.state.sortOption !== selectedOption) {
         this.setState({
            sortOption: selectedOption
         });
      }
   }

   addToCart = (id, info) => {
      let pList = this.state.selectedProduct || [];
      if(id in pList) {
         pList[id].qty = pList[id].qty + 1;

      } else {
         pList[id] = {
            qty: 1,
            info
         }
      }

      let cartCount = this.getCatCount(pList);

      this.setState({
         selectedProduct: pList,
         cartCount
      })

   }

   getCatCount = (productList) => {
      let count = 0;
      if(productList && productList.length > 0 ) {
         productList.map((item, index) => {
            count = count + Number(item.qty);
         })
      }
      return count;
   }

   updateQty = (e, id) => {
      let val = e.target.value || 1;
      if(val > 0) {
         let pList = this.state.selectedProduct || [];
         if(id in pList) {
            pList[id].qty = val;

            let cartCount = this.getCatCount(pList);

            this.setState({
               selectedProduct: pList,
               cartCount
            })
         }        
      }
   }

   increaseQty = (id) => {
      let pList = this.state.selectedProduct || [];
      if(id in pList) {
         pList[id].qty = pList[id].qty + 1;

         let cartCount = this.getCatCount(pList);

         this.setState({
            selectedProduct: pList,
            cartCount
         });
      }


   }

   decreaseQty = (id) => {
      let pList = this.state.selectedProduct || [];
      if(id in pList) {
         if(pList[id].qty > 1) {
            pList[id].qty = pList[id].qty - 1;

            let cartCount = this.getCatCount(pList);

            this.setState({
               selectedProduct: pList,
               cartCount
            });
         }
      }

      
   }

   removeItem = (id) => {
      let pList = this.state.selectedProduct || [];
      if(id in pList) {
         delete pList[id];

         let cartCount = this.getCatCount(pList);

         this.setState({
            selectedProduct: pList,
            cartCount
         });
      }
   }

   doSort = (data, option) => {
      return data.sort(function(a, b){
         try{
            if(option === 1) {
               return b.price.actual - a.price.actual;
            }
            else if (option === 2) {
               return a.price.actual - b.price.actual;
            }
            else if (option === 3) {
               return b.discount - a.discount;
            }
         }catch(e){}
      });
   }

   searchOnChange = (e) => {
      let searchTxt = e.currentTarget.value || '';
      this.setState({ searchTxt })
   }

   matchSearchTxt = () => {
      let txt = this.state.searchTxt.toLocaleLowerCase() || '';
      let dataList = this.state.dataList || [];
      let TmpList = [];
      if( txt !== '') {
         dataList.map((item, index) => {
            let pName = item.name || ''
            if(pName.toLocaleLowerCase().startsWith(txt)) {
               TmpList.push(item);
            }
         })
      } else {
         return dataList;
      }
      return TmpList;
   }

   applyFilter = ({minPrice, maxPrice}) => {
      if(minPrice !== this.state.minPrice || maxPrice !== this.state.maxPrice) {
         this.setState({minPrice, maxPrice});
      }
   }

   render() {
         let items = [];
         items = this.doSort(this.state.dataList, this.state.sortOption);

         let searchInfo = {
            searchTxt: this.state.searchTxt,
            searchOnChange: this.searchOnChange
         }
         items = this.matchSearchTxt();

         let filterInfo = {
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            applyFilter: this.applyFilter
         };
        
         let sortInfo = {
            sortOption: this.state.sortOption,
            changeSortOption: this.changeSortOption
         };

         let cartInfo = {
            cartCount: this.state.cartCount,
            addToCart: this.addToCart
         };

         let cartPageInfo = {
            selectedProduct: this.state.selectedProduct,
            handleEvents: {
               updateQty: this.updateQty,
               increaseQty: this.increaseQty,
               decreaseQty: this.decreaseQty,
               removeItem: this.removeItem
            }
         };

         return (
            <Router>
               <div className="App">
                  <Switch>
                     <Route exact path="/">
                        <Home items={items} filterInfo={filterInfo} sortInfo={sortInfo} cartInfo={cartInfo} searchInfo={searchInfo} />
                     </Route>
                     <Route path="/cart">
                        <CartPage cartPageInfo={cartPageInfo} searchInfo={searchInfo} />
                     </Route>
                  </Switch>
               </div>
            </Router>
         );
   }
}
