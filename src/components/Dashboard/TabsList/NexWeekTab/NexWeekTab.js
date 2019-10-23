import React, { Component } from 'react';
import { Element, scroller } from 'react-scroll';
import styles from './NexWeekTab.module.css';
import CardList from '../../CardList/CardList';

// import { connect } from 'react-redux';
// import { getTodayTomorrow } from '../../../../redux/tasks/tasksSelectors';

class NexWeekTab extends Component {
  state = {
    isOpenNext: true,
    isOpenAfter: true,
    burgerEvent: null,
    // nexAfter: null,
  };

  componentDidMount() {
    // const { nexAfter,burgerClick } = this.props;
    // this.setState({
    //   nexAfter: [...nexAfter],
    // });
    const { burgerEvent } = this.state;
    if (!burgerEvent) {
      if (burgerEvent === 'next' || burgerEvent === 'after') {
        scroller.scrollTo(`${burgerEvent}`, {
          duration: 1500,
          delay: 100,
          smooth: true,
        });
      }
    }
  }

  // componentDidUpdate(prevProps, prevState) {}

  handleToggleNext = () => {
    this.setState(state => ({
      isOpenNext: !state.isOpenNext,
    }));
  };

  handleToggleAfter = () => {
    this.setState(state => ({
      isOpenAfter: !state.isOpenAfter,
    }));
  };

  render() {
    const { isOpenNext, isOpenAfter } = this.state;
    return (
      <main className={styles.container}>
        <Element name="nexDay">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleNext}
              className={styles.titleButton}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={
                isOpenNext
                  ? [styles.titleButton, styles.titleNext].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleNext,
                    ].join(' ')
              }
            >
              Next 7 Days
            </button>
            {isOpenNext && <CardList />}
          </section>
        </Element>

        <Element name="afterDay">
          <section className={styles.section}>
            <button
              type="button"
              onClick={this.handleToggleAfter}
              className={
                isOpenAfter
                  ? [styles.titleButton, styles.titleAfter].join(' ')
                  : [
                      styles.titleButton,
                      styles.dropDoun,
                      styles.titleAfter,
                    ].join(' ')
              }
            >
              After 7 Days
            </button>
            {isOpenAfter && <CardList />}
          </section>
        </Element>
      </main>
    );
  }
}

export default NexWeekTab;

// const mapStateToProps = state => ({
//   nextAfter:  getNextAfter(state),
// });

// export default connect(
//   mapStateToProps,
//   null,
// )(NexWeekTab);
