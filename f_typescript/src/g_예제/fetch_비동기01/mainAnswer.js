// mainAnswer.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var _this = this;
var fetchButton = document.getElementById('fetchUserData');
// cf) 지정한 선택자가 해당 문서에 존재하지 않을 경우 null 값 반환
// : 해당 요소가 존재하지 않을 경우 null값에 대한 오류 방지를 위해
//   , ? 옵셔널 기호를 사용
// A?.~~
// : A가 존재할 경우 뒤의 기능이 실행, 존재하지 않을 경우 실행되지 않음
fetchButton === null || fetchButton === void 0 ? void 0 : fetchButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
  var userDataDiv, userIdElement, userId, apiUrl, fetchResponse, user, error_1;
  return __generator(this, function (_a) {
      switch (_a.label) {
          case 0:
              userDataDiv = document.getElementById('userData');
              userIdElement = document.getElementById('userId');
              userId = userIdElement ? userIdElement.value : '';
              apiUrl = "https://jsonplaceholder.typicode.com/users/".concat(userId);
              if (!userDataDiv) return [3 /*break*/, 5];
              userDataDiv.innerHTML = "<p>Loading user data</p>";
              _a.label = 1;
          case 1:
              _a.trys.push([1, 4, , 5]);
              return [4 /*yield*/, fetch(apiUrl)];
          case 2:
              fetchResponse = _a.sent();
              if (!fetchResponse.ok) {
                  throw new Error('사용자 데이터에 접근할 수 없습니다.');
              }
              return [4 /*yield*/, fetchResponse.json()];
          case 3:
              user = _a.sent();
              userDataDiv.innerHTML = "\n        <h2>User Details</h2>\n        <p>Id: ".concat(user.id, "</p>\n        <p>Name: ").concat(user.name, "</p>\n        <p>Email: ").concat(user.email, "</p>\n        <p>Address: ").concat(user.address.street, "</p>\n      ");
              return [3 /*break*/, 5];
          case 4:
              error_1 = _a.sent();
              userDataDiv.innerHTML = "<p>".concat(error_1, "</p>");
              return [3 /*break*/, 5];
          case 5: return [2 /*return*/];
      }
  });
}); });