import React from 'react';
import { addNewsActionCreator, UpdateNewsCreator } from './../redux/news-reducer';
import News from './news';
import { connect } from 'react-redux';
// export default class NewsContainer extends React.Component {
//     state;
//     constructor(props) {
//         super(props);
//         this.updateNews = this.updateNews.bind(this)
//         this.addNews = this.addNews.bind(this)
//         this.state = this.props.store.getState().news;
//         console.log(this.state);
        
//     }
//     addNews() {
//         this.props.store.dispatch(addNewsActionCreator());
//     }
//     updateNews(newValue) {
//         this.props.store.dispatch(UpdateNewsCreator(newValue));
//     }
//     render() {
//         return <News updateNews={this.updateNews} addNews={this.addNews} newNews={this.state.newNews} news={this.state.news} />
//     }
// }
const f1 = (state) =>  { 
    return {
        newNews: state.news.newNews,
        news: state.news.news,
    }
};
const f2 = (dispatch) => {
  return {
    addNews: () => {
        console.log('addd');
        
        dispatch(addNewsActionCreator())
    },
    updateNews: (newValue) => {
        console.log('df');
        
        dispatch(UpdateNewsCreator(newValue))
    },

  }
}
const NewsContainer = connect(f1, f2)(News);
export default NewsContainer