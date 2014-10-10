'use strict';

dtf.controller( 'ListCtrl',
  [ '$scope',
  function ( $scope ) {

    $scope.top_speakers = [
      { 'name': 'Jared Spool',
        'title': 'CEO & Founding Principal',
        'company': 'UIE',
        'slug': 'Writer, researcher, speaker, educator, and expert on usability, software, design, and research.',
        'image': './images/spool_blue.jpg',
        'speaking_order': '0' },
      { 'name': 'Amir Rajan',
        'title': 'Principal',
        'company': 'Scratchwork Dev, LLC',
        'slug': 'Polyglot, Mentor, Trainer, Open Source Contributor, ASP.NET Insider.',
        'image': './images/rajan_blue.jpg',
        'speaking_order': '1' },
      { 'name': 'Brian Sullivan',
        'title': 'Principal Consultant',
        'company': 'Improving Enterprises',
        'slug': 'Web technologist and Microsoft MVP with a passion for teaching.',
        'image': './images/sullivan_blue.jpg',
        'speaking_order': '2' }
    ];

    $scope.orderProp = 'speaking_order';

  }]);
