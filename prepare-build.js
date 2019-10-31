const del = require('del');

(async () => {
  await del(['dist/**/*']);
  console.log('Delete dist forder completed!');
})();
