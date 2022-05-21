const form = document.querySelector("form");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener("click", (e) => {
  if (!isTxt("userid", 5) && !isEmail("email", 5) && !isPwd("pwd1", "pwd2", 5))
    e.preventDefault();
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
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요`);
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
      `이메일 주소를 ${len}글자 이상 '@'를 포함하여 입력해 주세요.`
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
    errMsg.append("항목을 선택해 주세요.");
    sel.closest("td").append(errMsg);
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
      `비밀번호는 ${len}글자 이상, 숫자를 포함해서 동일하게 입력하세요`
    );
    pwd1.closest("td").append(errMsg);

    return false;
  }
}
