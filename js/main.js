function Contact(display,iconClass,url) {
  this.display = display;
  this.iconClass = iconClass;
  this.url = url;
}

function Position(title,dates,desc) {
  this.title = title;
  this.dates = dates;
  this.desc = desc;
}

function Organization(name,positions,url) {
  this.name = name;
  this.positions = positions;
  this.url = url;
}

function Section(name,organizations) {
  this.name = name;
  this.organizations = organizations;
}

var contacts = [
  new Contact("(919) 928-7235","fa-phone-square","tel:9199287235"),
  new Contact("cholmgreen@gmail.com","fa-envelope","mailto:cholmgreen@gmail.com"),
  new Contact("icasperzen","fa-github","https://github.com/icasperzen"),
  new Contact("casper.holmgreen","fa-facebook-square","https://www.facebook.com/casper.holmgreen"),
  new Contact("casper.holmgreen","fa-skype","skype:casper.holmgreen?add"),
  new Contact("casper.holmgreen","fa-linkedin-square","https://www.linkedin.com/in/casperholmgreen")
]

var work = new Section("work", [
  new Organization("North Carolina State University", [
    new Position("Security Research Assistant","2011-2012",
      "<ul><li>extended a paper comparing security tools for journal submission (published)</li>" +
      "<li>worked on conference paper about automated regulatory testing (won Agile2013 Best Paper)</li></ul>"),
    new Position("FORTRAN Instructor","2008-2009",
      "<ul><li>taught FORTRAN95 to two classes of ca. 40 engineering students</li>" +
      "<li>graded 4 assignments per student each week for over 200 students</li>" +
      "<li>voted Best Instructor 2009 of 15 instructors by the student body</li></ul>")
  ], "https://www.ncsu.edu/"),
  new Organization("Private Tutoring", [
    new Position("Science & Math Tutor", "2010-2011", "")
  ]),
  new Organization("Transoft International, Inc.", [
    new Position("Junior System Administrator","2005-2007", "")
  ], "http://www.ncr.com/"),
  new Organization("Office Max", [
    new Position("Lead Sales Associate","2004-2007","")
  ], "http://www.officedepot.com/")
]);

var edu = new Section("education", [
  new Organization("University of Copenhagen", [
    new Position("M.Sc. - Computer Science (Programming Languages)","2013-2015",
      "Thesis: Differential Privacy with Dependent Types")
  ], "http://www.ku.dk/english/"),
  new Organization("North Carolina State University", [
    new Position("B.Sc. - Nuclear Engineering","2007-2012",""),
    new Position("B.Sc. - Computer Science","2008-2012","")
  ], "https://www.ncsu.edu/")
]);

var online = new Section("online", [
  new Organization("Udacity", [
    new Position("Frontend Developer Nanodegree","2016","")
  ], "https://www.udacity.com/"),
  new Organization("edX", [
    new Position("Software as a Service","2012","")
  ], "https://www.edx.org/"),
  new Organization("Oak Ridge National Laboratory",[
    new Position("Non-destructive Assay (NDA) Applications for International Safeguards","2012")
  ], "https://www.ornl.gov/")
]);

var extra = new Section("extra-curricular", [
  new Organization("Information Assurance Student Group (IASG)", [
    new Position("NCSU Chapter Vice President","2012")
  ], "https://getinvolved.ncsu.edu/organization/IASG/"),
  new Organization("Institute of Nuclear Materials Management (INMM)", [
    new Position("NCSU Chapter Communications Officer","2012")
  ], "https://www.inmm.org/"),
  new Organization("American Nuclear Society (ANS)", [
    new Position("NCSU Chapter Member","2012")
  ], "http://www.ans.org/")
]);

var pubs = new Section("publications", [
  new Organization("Agile2013 (Nashville)", [
    new Position("Proposing Regulatory-Driven Automated Test Suites","2013","P. Morrison, C. Holmgreen, A.K. Massey, L. Williams<br>" +
      "Agile Conference (AGILE), 2013, 11-21")
  ], "http://agile2013.agilealliance.org/"),
  new Organization("Information and Software Technology (Elsevier)", [
    new Position("A Comparison of the Efficiency and Effectiveness of Vulnerability Discovery Techniques","2013", "A. Austin, C. Holmgreen, L. Williams<br>" +
      "Information and Software Technology 55 (7), 1279-1288")
  ]),
  new Organization("ANS Student Conference 2012", [
    new Position("Role of Secondary Electron Emission in Shaped Electrodes with Gaseous Glow Discharges","2012","C. Ratzlaff, C. Holmgreen, E. Rowshanaee<br>" +
      "American Nuclear Society Student Conference, 2012, April 12-15")
  ], "http://students.ans.org/student-conferences")
]);

var tldr = new Section("tl;dr", [
  new Organization("Casper M. H. Holmgreen", [
    new Position("Technical skills and interests","",
      "frontend+backend dev, ruby, haskell, idris, simulation, privacy, data science"),
    new Position("Other skills and interests","",
      "music, food, the great outdoors, mindfulness, mathematics, languages")
  ])
]);

var tContact = _.template($("script.tContact").html());
var tPosition = _.template($("script.tPosition").html());
var tOrganization = _.template($("script.tOrganization").html());
var tSection = _.template($("script.tSection").html());

// tutor math and sci.

$(".resume")
  .append(tSection(tldr))
  .append(tSection(work))
  .append(tSection(edu))
  .append(tSection(pubs))
  .append(tSection(online));

var div = $(".contactInfo");
_.each(contacts,function(c) {
  div.append(tContact(c));
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('.resume__cover').fadeOut();
     } else {
      $('.resume__cover').fadeIn();
     }
 });
