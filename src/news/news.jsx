import React from 'react';
export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.textA = React.createRef();
        this.updateNews = this.updateNews.bind(this);
        this.addNews = this.addNews.bind(this);        
    }

    updateNews() {
        this.props.updateNews(this.textA.current.value);
    }
    addNews() {
        this.props.addNews()
    }
    render() {
        return <div className='news'>
            <p>Страница новостей</p>
            <div className='send'>
                <textarea onChange={this.updateNews} ref={this.textA} value={this.props.newNews}></textarea>
                <button onClick={this.addNews} type='button'>отправить</button>
            </div>
            <ul>
                {this.props.news.map(news => {
                    return <li className='text-left' key={news.id}>{news.name}</li>
                })}
            </ul>
        </div>
    }
}