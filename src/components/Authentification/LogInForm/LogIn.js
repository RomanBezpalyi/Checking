import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import style from './LogInForm.module.css';
import FormButton from '../FormButton';
import Header from '../../Header/Header';
import { isAuthentificated } from '../../../redux/session/sessionSelectors';

class LogIn extends Component {
  static propTypes = {
    authentificated: PropTypes.bool.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
  };

  componentDidUpdate() {
    const { authentificated, history } = this.props;
    if (authentificated) {
      history.replace('/dashboard');
    }
  }

  render() {
    const screenWidth = document.documentElement.clientWidth;
    const {
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      errors,
      touched,
    } = this.props;
    return (
      <div className={style.wrapLogin}>
        {screenWidth < 768 && <Header />}
        <div className={style.loginContainer}>
          <div className={style.imgContainer} />

          <div className={style.textWrap}>
            <div className={style.loginTextWrap}>
              <h2 className={style.textLogin}>Log In</h2>
              <Link to="/registration" className={style.linkCreate}>
                <p className={style.textCreate}>Create an account</p>
              </Link>
            </div>

            <div className={style.formContainer}>
              <div className={style.mainText}>
                <span className={style.sloganText}>
                  Take control your life.
                </span>
                <span className={style.sloganText}>Just check in.</span>
              </div>

              <form className={style.formLogin} onSubmit={handleSubmit}>
                <p className={style.textEmail}>
                  E-mail<span className={style.star}>*</span>
                </p>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  name="email"
                  className={style.input}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && touched.email && (
                  <div className={style.inputError}>{errors.email}</div>
                )}
                <p className={style.password}>
                  <span className={style.textPassword}>
                    Password<span className={style.star}>*</span>
                  </span>
                  <Link to="/forgot" className={style.linkForgot}>
                    Forgot?
                  </Link>
                </p>
                <input
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="password"
                  name="password"
                  className={style.input}
                  placeholder="yourpassword"
                  required
                />
                {errors.password && touched.password && (
                  <div className={style.inputError}>{errors.password}</div>
                )}

                <FormButton type="submit">Log In</FormButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LogIn.propTypes = {
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  authentificated: isAuthentificated(state),
});

export default connect(
  mapStateToProps,
  null,
)(LogIn);
