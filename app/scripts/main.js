import riot from 'riot';
import todo from '../modules/todo.tag';

class App {
  /**
   * Initialize
   */
  constructor() {
    riot.mount(todo);
  }
}

new App(); // eslint-disable-line no-new
