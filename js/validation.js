//
const form = document.querySelector("#signUp");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
  if (!isTxt("userid", 5)) e.preventDefault();
  if (!isEmail("email", 5)) e.preventDefault();
  if (!isPwd("pwd1", "pwd2", 5)) e.preventDefault();
  if (!isCheck("gender")) e.preventDefault();
  if (!isSelect("country")) e.preventDefault();
});

// text
function isTxt(name, len) {
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  if (txt.length >= len) {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(`${len} characters minimum.`);
    input.closest("td").append(errMsg);

    return false;
  }
}

// email
function isEmail(name, len) {
  let input = form.querySelector(`[name=${name}]`);
  let txt = input.value;

  if (txt.length > len && /@/.test(txt)) {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = input.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) input.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append(
      `Your email address will become your Aléatoire id, which you’ll use to log into Aléatoire.`
    );
    input.closest("td").append(errMsg);

    return false;
  }
}

//country of residence
function isSelect(name) {
  let sel = form.querySelector(`[name=${name}]`);
  let sel_index = sel.options.selectedIndex;
  let val = sel[sel_index].value;

  if (val !== "") {
    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = sel.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) sel.closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append("Please select an country.");
    sel.closest("td").append(errMsg);
    return false;
  }
}

// check
function isCheck(name) {
  let inputs = form.querySelectorAll(`[name=${name}]`);
  let isChecked = false;

  for (let el of inputs) {
    if (el.checked) isChecked = true;
  }

  if (isChecked) {
    const errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = inputs[0].closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) inputs[0].closest("td").querySelector("p").remove();

    const errMsg = document.createElement("p");
    errMsg.append("Please check the required fields.");
    inputs[0].closest("td").append(errMsg);

    return false;
  }
}

//password
function isPwd(name1, name2, len) {
  let pwd1 = form.querySelector(`[name=${name1}]`);
  let pwd2 = form.querySelector(`[name=${name2}]`);

  let pwd1_val = pwd1.value;
  let pwd2_val = pwd2.value;

  const num = /[0-9]/;
  const eng = /[a-zA-Z]/;
  const spc = /[~!@#$%^&*()_+|\[\]]/;

  if (
    pwd1_val === pwd2_val &&
    pwd1_val.length >= len &&
    num.test(pwd1_val) &&
    eng.test(pwd1_val) &&
    spc.test(pwd1_val)
  ) {
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();

    return true;
  } else {
    const errMsgs = pwd1.closest("td").querySelectorAll("p");
    if (errMsgs.length > 0) pwd1.closest("td").querySelector("p").remove();
    const errMsg = document.createElement("p");
    errMsg.append(
      `Password must contain at least one number, special character and ${len} characters minimum.`
    );
    pwd1.closest("td").append(errMsg);

    return false;
  }
}
