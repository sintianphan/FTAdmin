import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Task.module.scss';

class Task extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    complited: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
  }

  render() {
    const { id, type, title, time, complited, toggle, index } = this.props;
    return (
      <div className={cx('d-flex align-items-start', { [s.complited]: complited })} key={id}>
        <div className="form-check abc-checkbox abc-checkbox-success d-flex">
          <input className="form-check-input" id={`checkbox${id}`} type="checkbox" onChange={() => toggle(index)} />
          <label className="form-check-label" htmlFor={`checkbox${id}`} />
        </div>
        <div className="task-content ps-2">
          <p className="mb-xs"><small>{type}</small></p>
          <h6 className="fw-semi-bold">{title}</h6>
          <p><small>{time}</small></p>
        </div>
      </div>
    );
  }
}

export default Task;
