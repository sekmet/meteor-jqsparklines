Package.describe({
  name: 'skt:jqsparklines',
  version: '0.1.0',
  summary: 'Charting library jquery.sparkline 2.1.2',
  git: 'https://github.com/sekmet/meteor-jqsparklines.git',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4');
  api.mainModule('jquery.sparklines.js', 'client');
});
