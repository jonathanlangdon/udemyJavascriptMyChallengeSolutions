const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
];

//Create array of company names

const companyNames = companies.map(company => company.name);

// array with just company and categories

const companyCategories = companies.map(company => {
  return {
    name: company.name,
    category: company.category
  };
});

// create array of length of each company in years

const companyLength = companies.map(company => {
  return {
    name: company.name,
    length: company.end - company.start + ' years'
  };
});
