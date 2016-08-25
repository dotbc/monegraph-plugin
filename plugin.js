const debug = require('debug')('monegraph-plugin');

var teamData = [
  {
    name: 'Kevin McCoy',
    secondaryText: 'Artist + CEO',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a79cdd2016a84e6065d828_kevin-sm.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Chris Tse',
    secondaryText: 'CTO',
    image: 'https://daks2k3a4ib2z.cloudfront.net/56706b76f32c67943c66d59b/568450bd5a2d1c2f6a96ac24_Chris.png',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Hassan Abdel-Rahman',
    secondaryText: 'Señor Software Engineer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a79cd2cdc7f85552832318_hassan-sm.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Will Bagby',
    secondaryText: 'Señor Software Engineer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a79cc6cdc7f85552832314_will-sm.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Tom Dale',
    secondaryText: 'Señor Software Engineer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/57717fa5e06b550b0c1af8ff_tomdate-001.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Chris Gardella',
    secondaryText: 'Designer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/56706b76f32c67943c66d59b/568d79ff8c8110b94e8ab84f_gardella3%20edit-2.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Steve Bobrov',
    secondaryText: 'Quality Engineer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a79cb3664c791657161791_steve-sm.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Noah Santorello',
    secondaryText: 'Integration Engineer',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a79ca1022c231b574d14c3_noah-sm.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  },
  {
    name: 'Renato Iannella',
    secondaryText: 'W3C Representative',
    image: 'https://daks2k3a4ib2z.cloudfront.net/567070f2f32c67943c66dddf/56a7ec874f35a95a79478fd7_renato%20-%201.jpg',
    href: 'https://monegraph.com/team',
    human_href: 'https://monegraph.com/team'
  }
];

class MonegraphPlugin {

  search (entityType, query, cb) {

    debug(`performing ${entityType} search w query ${query}`);

    if (entityType === 'artist') {
      var results = _.filter(teamData, function(member) {
        return member.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
      });
      return cb(null, results);
    }

    return cb();
  
  }

  getDetails (entity, cb) {

    return cb(null, entity);

  }

}

module.exports = MonegraphPlugin;