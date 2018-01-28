const data = {
  qId001 : {
    type : "multiSelect",
    question : "Are you looking to manage your health or the health of someone else? [Select all that apply]",
    options : {
      aId001 : "My own",
      aId002 : "My parent(s)",
      aId003 : "My child(ren)",
      aId004 : "My partner"
    }
  },
  qId002 : {
    type : "select",
    question : "When was the last time you saw a healthcare provider?",
    options : {
      aId005 : "In the last month",
      aId006 : "In the last 6 months",
      aId007 : "Last year",
      aId008 : "A few years ago",
      aId009 : "I can’t remember"
    }
  },
  qId003 : {
    type : "select",
    question : "How many times have you visited a clinic, hospital, or other healthcare provider in the last 5 years?",
    options : {
      aId010 : "Less than 3 times",
      aId011 : "3-5 times",
      aId012 : "5-10 times",
      aId013 : "More than 10 times",
      aId014 : "Not sure"
    }
  },
  qId004 : {
    type : "selectTextInput",
    question : "Do you take any prescription medications?",
    options : {
      aId015 : "Yes",
      aId016 : "No",
      aId017 : "Prefer not to say"
    }
  },
  qId005 : {
    type : "selectTextInput",
    question : "Are you currently managing an acute or ongoing medical condition? (e.g. diabetes, MS, Crohns)",
    options : {
      aId018 : "Yes",
      aId019 : "No",
      aId020 : "Prefer not to say"
    }
  }
}

export default data
