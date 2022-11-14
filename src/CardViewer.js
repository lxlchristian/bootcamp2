import React from 'react';


class CardViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { current_card: 0, is_front: true }
    }

    prevCard = () => {
        this.setState({ current_card: this.state.current_card - 1 });
    } 
    nextCard = () => {
        this.setState({ current_card: this.state.current_card + 1 });
    }
    flipCard = () => this.setState({ is_front: !this.state.is_front });

    render() {
        const card_data = this.props.cards[this.state.current_card];
        if (this.state.is_front) {
            var card_shown = card_data.front;
        } else {
            var card_shown = card_data.back;
        }

        var prevButton = this.state.current_card === 0
                            ? <button disabled onClick={this.prevCard}>Previous</button> 
                            : <button onClick={this.prevCard}>Previous</button>;
        var nextButton = this.state.current_card === this.props.cards.length - 1
                            ? <button disabled onClick={this.nextCard}>Next</button> 
                            : <button onClick={this.nextCard}>Next</button>;

        return (
            <div>
                <h2>Card Viewer</h2>
                <button className="flashcard" onClick={this.flipCard}>{ card_shown }</button>
                <div>
                    { prevButton }
                    { nextButton }
                </div>
                <p>Card {this.state.current_card + 1}/{this.props.cards.length}</p>
                <hr />
                <button onClick={this.props.switchMode}>Go to card editor</button>
            </div>
        )
    }
}

export default CardViewer;