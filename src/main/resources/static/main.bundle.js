webpackJsonp([0,3],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_question_service__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddQuestionComponent = (function () {
    function AddQuestionComponent(addQuestionService, router) {
        this.addQuestionService = addQuestionService;
        this.router = router;
        this.question = {
            info: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            option5: '',
            answer: 1
        };
    }
    AddQuestionComponent.prototype.addQuestion = function () {
        var data = this.question;
        this.addQuestionService.AddQuestion(data).subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['./add-question']);
    };
    AddQuestionComponent.prototype.ngOnInit = function () {
    };
    AddQuestionComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-question',
            template: __webpack_require__(702),
            styles: [__webpack_require__(687)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__add_question_service__["a" /* AddQuestionService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__add_question_service__["a" /* AddQuestionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__add_question_service__["a" /* AddQuestionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AddQuestionComponent);
    return AddQuestionComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/add-question.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddQuizComponent = (function () {
    function AddQuizComponent() {
    }
    AddQuizComponent.prototype.ngOnInit = function () {
    };
    AddQuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-add-quiz',
            template: __webpack_require__(703),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddQuizComponent);
    return AddQuizComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/add-quiz.component.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__(525);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        var _this = this;
        this.dashboardService = dashboardService;
        this.dashboardService.viewUsers().subscribe(function (response) {
            _this.users = response.responseObject.users;
            console.log(response);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__(705),
            styles: [__webpack_require__(690)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a" /* DashboardService */]) === 'function' && _a) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/dashboard.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishQuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PublishQuizComponent = (function () {
    function PublishQuizComponent() {
    }
    PublishQuizComponent.prototype.ngOnInit = function () {
    };
    PublishQuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-publish-quiz',
            template: __webpack_require__(706),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], PublishQuizComponent);
    return PublishQuizComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/publish-quiz.component.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_questions_service__ = __webpack_require__(526);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuestionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewQuestionsComponent = (function () {
    function ViewQuestionsComponent(viewQuestionsService) {
        var _this = this;
        this.viewQuestionsService = viewQuestionsService;
        this.viewQuestionsService.viewQuestions().subscribe(function (response) {
            _this.questions = response.responseObject.questions;
            console.log(response);
        });
    }
    ViewQuestionsComponent.prototype.ngOnInit = function () {
    };
    ViewQuestionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-view-questions',
            template: __webpack_require__(707),
            styles: [__webpack_require__(692)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__view_questions_service__["a" /* ViewQuestionsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__view_questions_service__["a" /* ViewQuestionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__view_questions_service__["a" /* ViewQuestionsService */]) === 'function' && _a) || Object])
    ], ViewQuestionsComponent);
    return ViewQuestionsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/view-questions.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(338);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(339);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz__ = __webpack_require__(530);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__quiz__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_config__ = __webpack_require__(340);
/* unused harmony namespace reexport */




//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/index.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Option; });
var Option = (function () {
    function Option(data) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
    return Option;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/option.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__option__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });

var Question = (function () {
    function Question(data) {
        var _this = this;
        data = data || {};
        this.id = data.id;
        this.name = data.name;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(function (o) {
            _this.options.push(new __WEBPACK_IMPORTED_MODULE_0__option__["a" /* Option */](o));
        });
    }
    return Question;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/question.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizConfig; });
var QuizConfig = (function () {
    function QuizConfig(data) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.autoMove = data.autoMove;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        this.requiredAll = data.requiredAll;
        this.richText = data.richText;
        this.shuffleQuestions = data.shuffleQuestions;
        this.shuffleOptions = data.shuffleOptions;
        this.showClock = data.showClock;
        this.showPager = data.showPager;
    }
    return QuizConfig;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/quiz-config.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizComponent = (function () {
    function QuizComponent(quizService) {
        this.quizService = quizService;
        this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    QuizComponent.prototype.ngOnInit = function () {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    };
    QuizComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](res);
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
    };
    Object.defineProperty(QuizComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    QuizComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    QuizComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    QuizComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    QuizComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    QuizComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    QuizComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-quiz',
            template: __webpack_require__(709),
            styles: [__webpack_require__(694)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === 'function' && _a) || Object])
    ], QuizComponent);
    return QuizComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/quiz.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuizService = (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.get = function (url) {
        return this.http.get(url).map(function (res) { return res.text().length > 0 ? res.json() : null; });
    };
    QuizService.prototype.getAll = function () {
        return [
            { id: 'data/aspnet.json', name: 'Asp.Net' },
            { id: 'data/csharp.json', name: 'C Sharp' },
            { id: 'data/designPatterns.json', name: 'Design Patterns' }
        ];
    };
    QuizService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], QuizService);
    return QuizService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/quiz.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExamComponent = (function () {
    function ExamComponent(quizService) {
        this.quizService = quizService;
        this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](null);
        this.mode = 'quiz';
        this.config = {
            'allowBack': true,
            'allowReview': true,
            'autoMove': false,
            'duration': 0,
            'pageSize': 1,
            'requiredAll': false,
            'richText': false,
            'shuffleQuestions': false,
            'shuffleOptions': false,
            'showClock': false,
            'showPager': true,
            'theme': 'none'
        };
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
    }
    ExamComponent.prototype.ngOnInit = function () {
        this.quizes = this.quizService.getAll();
        this.quizName = this.quizes[0].id;
        this.loadQuiz(this.quizName);
    };
    ExamComponent.prototype.loadQuiz = function (quizName) {
        var _this = this;
        this.quizService.get(quizName).subscribe(function (res) {
            _this.quiz = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Quiz */](res);
            _this.pager.count = _this.quiz.questions.length;
        });
        this.mode = 'quiz';
    };
    Object.defineProperty(ExamComponent.prototype, "filteredQuestions", {
        get: function () {
            return (this.quiz.questions) ?
                this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
        },
        enumerable: true,
        configurable: true
    });
    ExamComponent.prototype.onSelect = function (question, option) {
        if (question.questionTypeId === 1) {
            question.options.forEach(function (x) { if (x.id !== option.id)
                x.selected = false; });
        }
        if (this.config.autoMove) {
            this.goTo(this.pager.index + 1);
        }
    };
    ExamComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'quiz';
        }
    };
    ExamComponent.prototype.isAnswered = function (question) {
        return question.options.find(function (x) { return x.selected; }) ? 'Answered' : 'Not Answered';
    };
    ;
    ExamComponent.prototype.isCorrect = function (question) {
        return question.options.every(function (x) { return x.selected === x.isAnswer; }) ? 'correct' : 'wrong';
    };
    ;
    ExamComponent.prototype.onSubmit = function () {
        var _this = this;
        var answers = [];
        this.quiz.questions.forEach(function (x) { return answers.push({ 'quizId': _this.quiz.id, 'questionId': x.id, 'answered': x.answered }); });
        // Post your data to the server here. answers contains the questionId and the users' answer.
        console.log(this.quiz.questions);
        this.mode = 'result';
    };
    ExamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-exam',
            template: __webpack_require__(710),
            styles: [__webpack_require__(695)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_quiz_service__["a" /* QuizService */]) === 'function' && _a) || Object])
    ], ExamComponent);
    return ExamComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/exam.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(712),
            styles: [__webpack_require__(697)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/login.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    }
    RegisterComponent.prototype.register = function () {
        var data = this.user;
        this.registerService.postJSON(data).subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['./']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(713),
            styles: [__webpack_require__(698)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/register.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopScorerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopScorerComponent = (function () {
    function TopScorerComponent() {
    }
    TopScorerComponent.prototype.ngOnInit = function () {
    };
    TopScorerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-top-scorer',
            template: __webpack_require__(714),
            styles: [__webpack_require__(699)]
        }), 
        __metadata('design:paramtypes', [])
    ], TopScorerComponent);
    return TopScorerComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/top-scorer.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDashboardComponent = (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(715),
            styles: [__webpack_require__(700)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/user-dashboard.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 406;


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(528);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/main.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuestionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddQuestionService = (function () {
    function AddQuestionService(http) {
        this.http = http;
    }
    AddQuestionService.prototype.AddQuestion = function (data) {
        console.log(JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:8080/question/add", data, options)
            .map(function (res) { return res.json(); });
    };
    AddQuestionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], AddQuestionService);
    return AddQuestionService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/add-question.service.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminHeaderComponent = (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-admin-header',
            template: __webpack_require__(704),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/admin-header.component.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.viewUsers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/user/list', options)
            .map(function (res) { return res.json(); });
    };
    DashboardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DashboardService);
    return DashboardService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/dashboard.service.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuestionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewQuestionsService = (function () {
    function ViewQuestionsService(http) {
        this.http = http;
    }
    ViewQuestionsService.prototype.viewQuestions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/question/list', options)
            .map(function (res) { return res.json(); });
    };
    ViewQuestionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ViewQuestionsService);
    return ViewQuestionsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/view-questions.service.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(708),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/app.component.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__admin_dashboard_dashboard_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_add_question_add_question_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_view_questions_view_questions_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_register_register_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_dashboard_user_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_header_header_component__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_header_admin_header_component__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_exam_exam_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_top_scorer_top_scorer_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_add_quiz_add_quiz_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_publish_quiz_publish_quiz_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_8__admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__admin_add_question_add_question_component__["a" /* AddQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__admin_view_questions_view_questions_component__["a" /* ViewQuestionsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__user_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_header_admin_header_component__["a" /* AdminHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__user_exam_exam_component__["a" /* ExamComponent */],
                __WEBPACK_IMPORTED_MODULE_17__user_top_scorer_top_scorer_component__["a" /* TopScorerComponent */],
                __WEBPACK_IMPORTED_MODULE_18__admin_add_quiz_add_quiz_component__["a" /* AddQuizComponent */],
                __WEBPACK_IMPORTED_MODULE_19__admin_publish_quiz_publish_quiz_component__["a" /* PublishQuizComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* appRouterModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/app.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_dashboard_dashboard_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_add_question_add_question_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_view_questions_view_questions_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_login_login_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_register_register_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user_dashboard_user_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_exam_exam_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_top_scorer_top_scorer_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__quiz_quiz_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__admin_add_quiz_add_quiz_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_publish_quiz_publish_quiz_component__ = __webpack_require__(335);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouterModule; });












// Route config let's you map routes to components
var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_1__admin_dashboard_dashboard_component__["a" /* DashboardComponent */],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'add-question',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_add_question_add_question_component__["a" /* AddQuestionComponent */],
    },
    {
        path: 'view-questions',
        component: __WEBPACK_IMPORTED_MODULE_3__admin_view_questions_view_questions_component__["a" /* ViewQuestionsComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__user_login_login_component__["a" /* LoginComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__user_register_register_component__["a" /* RegisterComponent */],
    },
    {
        path: 'user-dashboard',
        component: __WEBPACK_IMPORTED_MODULE_6__user_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
    },
    {
        path: 'exam',
        component: __WEBPACK_IMPORTED_MODULE_7__user_exam_exam_component__["a" /* ExamComponent */],
    },
    {
        path: 'top-scorer',
        component: __WEBPACK_IMPORTED_MODULE_8__user_top_scorer_top_scorer_component__["a" /* TopScorerComponent */],
    },
    {
        path: 'quiz',
        component: __WEBPACK_IMPORTED_MODULE_9__quiz_quiz_component__["a" /* QuizComponent */],
    },
    {
        path: 'add-quiz',
        component: __WEBPACK_IMPORTED_MODULE_10__admin_add_quiz_add_quiz_component__["a" /* AddQuizComponent */],
    },
    {
        path: 'publish-quiz',
        component: __WEBPACK_IMPORTED_MODULE_11__admin_publish_quiz_publish_quiz_component__["a" /* PublishQuizComponent */],
    },
];
var appRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/app.routes.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__quiz_config__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__question__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Quiz; });


var Quiz = (function () {
    function Quiz(data) {
        var _this = this;
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new __WEBPACK_IMPORTED_MODULE_0__quiz_config__["a" /* QuizConfig */](data.config);
            this.questions = [];
            data.questions.forEach(function (q) {
                _this.questions.push(new __WEBPACK_IMPORTED_MODULE_1__question__["a" /* Question */](q));
            });
        }
    }
    return Quiz;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/quiz.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__(711),
            styles: [__webpack_require__(696)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/header.component.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.viewQuestion = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:8080/user/register', options)
            .map(function (res) { return res.json(); });
    };
    RegisterService.prototype.postJSON = function (data) {
        console.log(JSON.stringify(data));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:8080/user/register", data, options)
            .map(function (res) { return res.json(); });
    };
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/register.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/environment.js.map

/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/dream/Desktop/freelancer project/tony/quiz/src/polyfills.js.map

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports
exports.push([module.i, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;    \r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;        \r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #1a242f;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,.5) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #1a242f !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n    border-bottom: 1px rgba(0,0,0,.3) solid;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    /*color: #999;*/\r\n    color: #fff;    \r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar .nav > li > a > .label {\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 14px;\r\n  right: 6px;\r\n  font-size: 10px;\r\n  font-weight: normal;\r\n  min-width: 15px;\r\n  min-height: 15px;\r\n  line-height: 1.0em;\r\n  text-align: center;\r\n  padding: 2px;\r\n}\r\n\r\n.navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n.navbar-brand {\r\n    padding: 5px 15px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".account-box\r\n{\r\n    border: 2px solid rgba(153, 153, 153, 0.75);\r\n    border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -webkit-border-radius: 2px;\r\n    -khtml-border-radius: 2px;\r\n    -o-border-radius: 2px;\r\n    z-index: 3;\r\n    font-size: 13px !important;\r\n    font-family: \"Helvetica Neue\" ,Helvetica,Arial,sans-serif;\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n}\r\n\r\n.logo\r\n{\r\n    width: 138px;\r\n    height: 30px;\r\n    text-align: center;\r\n    margin: 10px 0px 27px 40px;\r\n    background-position: 0px -4px;\r\n    position: relative;\r\n}\r\n\r\n.forgotLnk\r\n{\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.purple-bg\r\n{\r\n    background-color: #6E329D;\r\n    color: #fff;\r\n}\r\n.or-box\r\n{\r\n    position: relative;\r\n    border-top: 1px solid #dfdfdf;\r\n    padding-top: 20px;\r\n    margin-top:20px;\r\n}\r\n.or\r\n{\r\n    color: #666666;\r\n    background-color: #ffffff;\r\n    position: absolute;\r\n    text-align: center;\r\n    top: -8px;\r\n    width: 40px;\r\n    left: 90px;\r\n}\r\n.account-box .btn:hover\r\n{\r\n    color: #fff;\r\n}\r\n.btn-facebook\r\n{\r\n    background-color: #3F639E;\r\n    color: #fff;\r\n    font-weight:bold;\r\n}\r\n.btn-google\r\n{\r\n    background-color: #454545;\r\n    color: #fff;\r\n    font-weight:bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, ".account-box\r\n{\r\n    border: 2px solid rgba(153, 153, 153, 0.75);\r\n    border-radius: 2px;\r\n    -moz-border-radius: 2px;\r\n    -webkit-border-radius: 2px;\r\n    -khtml-border-radius: 2px;\r\n    -o-border-radius: 2px;\r\n    z-index: 3;\r\n    font-size: 13px !important;\r\n    font-family: \"Helvetica Neue\" ,Helvetica,Arial,sans-serif;\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n}\r\n\r\n.logo\r\n{\r\n    width: 138px;\r\n    height: 30px;\r\n    text-align: center;\r\n    margin: 10px 0px 27px 40px;\r\n    background-position: 0px -4px;\r\n    position: relative;\r\n}\r\n\r\n.forgotLnk\r\n{\r\n    margin-top: 10px;\r\n    display: block;\r\n}\r\n\r\n.purple-bg\r\n{\r\n    background-color: #6E329D;\r\n    color: #fff;\r\n}\r\n.or-box\r\n{\r\n    position: relative;\r\n    border-top: 1px solid #dfdfdf;\r\n    padding-top: 20px;\r\n    margin-top:20px;\r\n}\r\n.or\r\n{\r\n    color: #666666;\r\n    background-color: #ffffff;\r\n    position: absolute;\r\n    text-align: center;\r\n    top: -8px;\r\n    width: 40px;\r\n    left: 90px;\r\n}\r\n.account-box .btn:hover\r\n{\r\n    color: #fff;\r\n}\r\n.btn-facebook\r\n{\r\n    background-color: #3F639E;\r\n    color: #fff;\r\n    font-weight:bold;\r\n}\r\n.btn-google\r\n{\r\n    background-color: #454545;\r\n    color: #fff;\r\n    font-weight:bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <app-admin-header></app-admin-header>\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" ><br><br><br>\n                <div class=\"col-sm-12 col-md-12\" id=\"content\">\n<h1>\n  Add Questions\n</h1>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">     \n      <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label class=\"control-label col-sm-2\" for=\"email\"><h4>Enter Question : </h4></label>\n          <div class=\"col-sm-10\">\n            <textarea type=\"text\" rows=\"1\" [(ngModel)]=\"question.info\" name=\"question\" class=\"form-control\" ></textarea>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12\">        \n          <h4>Add Answer's And select Correct Answer</h4>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Option: 1</label>\n          <div class=\"col-sm-10\"> \n            <input type=\"text\" [(ngModel)]=\"question.option1\" name=\"option1\" class=\"form-control\"  placeholder=\"Option 1\">\n          </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Option: 2</label>\n          <div class=\"col-sm-10 \"> \n            <input type=\"text\" [(ngModel)]=\"question.option2\" name=\"option2\" class=\"form-control\"  placeholder=\"Option 2\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Option: 3</label>\n          <div class=\"col-sm-10 \"> \n            <input type=\"text\" [(ngModel)]=\"question.option3\" name=\"option3\" class=\"form-control\"  placeholder=\"Option 3\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Option: 4</label>\n          <div class=\"col-sm-10 \"> \n            <input type=\"text\" [(ngModel)]=\"question.option4\" name=\"option4\" class=\"form-control\"  placeholder=\"Option 4\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">Option: 5</label>\n          <div class=\"col-sm-10 \"> \n            <input type=\"text\" [(ngModel)]=\"question.option5\" name=\"option5\" class=\"form-control\"  placeholder=\"Option 5\">\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-4 control-label\">Enter Correct Answer Option ex. 1</label>\n            <div class=\"col-sm-8\"> \n              <input type=\"text\" [(ngModel)]=\"question.answer\" name=\"answer\" class=\"form-control\"  placeholder=\"Enter Correct Option EX. 1\">\n            </div>\n          </div>\n        \n        <div class=\"form-group\"> \n          <div class=\"col-sm-offset-2 col-sm-10\">\n            <button type=\"submit\" class=\"btn btn-default\" (click)=\"addQuestion()\">Submit</button>\n          </div>\n        </div>\n      </form>    \n  </div>\n</div>\n\n\n\n</div>\n</div>\n<!-- /.row -->\n</div>\n<!-- /.container-fluid -->\n</div>\n<!-- /#page-wrapper -->\n</div><!-- /#wrapper -->"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n<app-admin-header></app-admin-header>\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" ><br><br><br>\n                <div class=\"col-sm-12 col-md-12\" id=\"content\">\n                  <div class=\"panel panel-default\">\n                  <div class=\"panel-body\">\n                    <h2>Create Quiz</h2>\n                    <form action=\"\">\n                      <div class=\"form-group form-inline\">\n                        <label class=\"col-sm-3\" for=\"text\">Enter Quiz Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"email\">\n                      </div>\n                      <div class=\"form-group form-inline\">\n                        <label class=\"col-sm-3\" for=\"text\">Enter Total Questions in Quiz</label>\n                        <input type=\"text\" class=\"form-control\" id=\"pwd\">\n                      </div>  \n                      <div class=\"form-group form-inline\">\n                        <label class=\"col-sm-3\" for=\"text\">Time For Quiz</label>\n                        <input type=\"text\" class=\"form-control col-sm-5\" id=\"pwd\">\n                        <label class=\"col-sm-3\" for=\"text\">Time in *Min</label>\n                      </div>  <br><br> <br><br>                 \n                      <button type=\"submit\" class=\"btn btn-default col-sm-offset-4\">Submit</button>\n                    </form>\n                  </div>\n                   \n                  </div>\n      \n      \n\n\n\n                  </div>\n                </div>\n                <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n        </div>\n</div>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- Navigation -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">\n                <h3>Online Exam</h3>\n            </a>\n        </div>\n        <!-- Top Menu Items -->\n        <ul class=\"nav navbar-right top-nav\">\n            <li><a [routerLink]=\"['/']\">Logout</a>              \n            </li>         \n        </ul>\n        <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n        <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n            <ul class=\"nav navbar-nav side-nav\">               \n                <li>\n                    <a  [routerLink]=\"['/dashboard']\"><i></i> Dashboard</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/add-question']\"> Add Question</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/view-questions']\"> View Questions</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/add-quiz']\"> Add Quiz</a>\n                </li>\n                <li>\n                    <a [routerLink]=\"['/publish-quiz']\"> Publish Quiz</a>\n                </li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </nav>"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\r\n<div id=\"noty-holder\"></div>\r\n<div id=\"wrapper\">\r\n   <app-admin-header></app-admin-header> \r\n\r\n    <div id=\"page-wrapper\">\r\n        <div class=\"container-fluid\">\r\n            <!-- Page Heading -->\r\n            <div class=\"row\" id=\"main\" ><br><br><br>\r\n                <div class=\"col-sm-12 col-md-12\" id=\"content\">\r\n\r\n\r\n\r\n<h1>Total Users</h1>\r\n\r\n<table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th>Firstname</th>\r\n        <th>Lastname</th>\r\n        <th>Email</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>John</td>\r\n        <td>Doe</td>\r\n        <td>john@example.com</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Mary</td>\r\n        <td>Moe</td>\r\n        <td>mary@example.com</td>\r\n      </tr>\r\n      <tr>\r\n        <td>July</td>\r\n        <td>Dooley</td>\r\n        <td>july@example.com</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n<!-- /.row -->\r\n</div>\r\n<!-- /.container-fluid -->\r\n</div>\r\n<!-- /#page-wrapper -->\r\n</div><!-- /#wrapper -->"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n<app-admin-header></app-admin-header>\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" ><br><br><br>\n                <div class=\"col-sm-12 col-md-12\" id=\"content\">\n                  <div class=\"form-group form-inline\">\n                    <h3>Select Quiz to Add Questions</h3>                    \n                    <select class=\"form-control\" >\n                        <option>1</option>\n                        <option>2</option>\n                        <option>3</option>\n                        <option>4</option>\n                      </select>\n                  </div><hr>\n                  <div>\n                    <label> All Questions</label>                    \n                  </div>\n         <table class=\"table table-bordered\" >\n      <thead>\n        <tr>\n          <th></th>\n          <th> Id</th>\n          <th>Question</th>\n          <th>Option 1</th>\n          <th>Option 2</th>\n          <th>Option 3</th>\n          <th>Option 4</th>\n          <th>Option 5</th>\n          <th>correct Option</th>\n          \n        </tr>\n      </thead>\n      <tbody>\n        <tr >\n          <td><input type=\"checkbox\" value=\"\"></td>\n          <td>1</td>\n          <td>question</td>\n          <td>option1</td>\n          <td>option2</td>\n          <td>option3</td>\n          <td>option4</td>          \n          <td>option5</td>\n          <td>1</td>\n        </tr>        \n      </tbody>\n    </table> <hr><br>\n    <button class=\"btn btn-default\">Publish Quiz</button>\n\n\n\n                  </div>\n                </div>\n                <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n        </div>\n</div>"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n<app-admin-header></app-admin-header>\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" ><br><br><br>\n                <div class=\"col-sm-12 col-md-12\" id=\"content\">\n                  <div>\n                    <button (click)=\"getAllQuestions()\"> All Questions</button>\n                    {{QuestionList}}\n                  </div>\n         <table class=\"table table-bordered\" >\n      <thead>\n        <tr>\n          \n          <th>Question</th>\n          <th>Option 1</th>\n          <th>Option 2</th>\n          <th>Option 3</th>\n          <th>Option 4</th>\n          <th>Option 5</th>\n          <th>correct Option</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let question of questions\">\n          <td>{{question.info}}</td>\n          <td>{{question.option1}}</td>\n          <td>{{question.option2}}</td>\n          <td>{{question.option3}}</td>\n          <td>{{question.option4}}</td>\n          <td>{{question.option5}}</td>\n          <td>{{question.answer}}</td>          \n          <td><a><i class=\"fa fa-remove\"></i>Remove</a></td>\n        </tr>        \n      </tbody>\n    </table> \n\n\n\n                  </div>\n                </div>\n                <!-- /.row -->\n            </div>\n            <!-- /.container-fluid -->\n        </div>\n</div>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3>Quiz Application</h3>\n  </div><hr />\n  <div class=\"col-md-6 text-sm-right\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        <div class=\"col-sm-4\">\n            <h3>Select Quiz:</h3>\n        </div>\n        <div class=\"col-sm-8\" style=\"padding-top:15px;\">\n          <select class=\"form-control\" [(ngModel)]=\"quizName\" (change)=\"loadQuiz(quizName)\">\n            <option *ngFor=\"let quiz of quizes\" [value]=\"quiz.id\">{{quiz.name}}</option>\n          </select>   \n        </div>         \n      </div>        \n    </div>   \n  </div>\n</div>\n<div id=\"quiz\">\n  <h1 class=\"text-sm-center\">{{quiz.name}}</h1>\n  <hr />\n\n  <div *ngIf=\"mode=='quiz' && quiz\">\n    <div *ngFor=\"let question of filteredQuestions;\">\n      <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\n      <h2>{{pager.index + 1}}. <span [innerHTML]=\"question.name\"></span></h2>\n      <div class=\"row text-left options\">\n        <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\n          <div class=\"option\">\n            <label class=\"\" [attr.for]=\"option.id\">\n                <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" />\n                {{option.name}}\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr />\n    <div class=\"text-sm-center\">\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\n      <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\n      <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\n      <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\n    </div>\n  </div>\n\n  <div class=\"row review\" *ngIf=\"mode=='review'\">\n    <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\n      <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\n    </div>\n  </div>\n  <div class=\"result\" *ngIf=\"mode=='result'\">\n    <h2>Quiz Result</h2>\n    <div *ngFor=\"let question of quiz.questions; let index = index\">\n      <div class=\"result-question\">\n        <h4>{{index + 1}}. {{question.name}}</h4>\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\n            <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\n          </div>\n        </div>\n        <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\n      </div>\n    </div>\n    <h4 class=\"alert alert-info text-sm-center\">You may close this window now.</h4>\n  </div>\n  <hr />\n  <div *ngIf=\"mode!='result'\">\n    <button class=\"btn btn-default\" (click)=\"mode = 'quiz'\">Quiz</button>\n    <button class=\"btn btn-default\" (click)=\"mode = 'review'\">Review</button>\n    <button class=\"btn btn-default\" (click)=\"onSubmit();\">Submit Quiz</button>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h3>Quiz Application</h3>\r\n          </div><hr />\r\n          <div class=\"col-md-6 text-sm-right\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-body\">\r\n                <div class=\"col-sm-4\">\r\n                    <h3>Select Quiz:</h3>\r\n                </div>\r\n                <div class=\"col-sm-8\" style=\"padding-top:15px;\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"quizName\" (change)=\"loadQuiz(quizName)\">\r\n                    <option *ngFor=\"let quiz of quizes\" [value]=\"quiz.id\">{{quiz.name}}</option>\r\n                  </select>   \r\n                </div>         \r\n              </div>        \r\n            </div>   \r\n          </div>\r\n        </div>\r\n        <div id=\"quiz\">\r\n          <h1 class=\"text-sm-center\">{{quiz.name}}</h1>\r\n          <hr />\r\n        \r\n          <div *ngIf=\"mode=='quiz' && quiz\">\r\n            <div *ngFor=\"let question of filteredQuestions;\">\r\n              <div class=\"badge badge-info\">Question {{pager.index + 1}} of {{pager.count}}.</div>\r\n              <h2>{{pager.index + 1}}. <span [innerHTML]=\"question.name\"></span></h2>\r\n              <div class=\"row text-left options\">\r\n                <div class=\"col-md-6\" *ngFor=\"let option of question.options\">\r\n                  <div class=\"option\">\r\n                    <label class=\"\" [attr.for]=\"option.id\">\r\n                        <input id=\"{{option.id}}\" type=\"checkbox\" [(ngModel)]=\"option.selected\" (change)=\"onSelect(question, option);\" />\r\n                        {{option.name}}\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"text-sm-center\">\r\n              <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(0);\">First</button>\r\n              <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.index - 1);\">Prev</button>\r\n              <button class=\"btn btn-primary\" (click)=\"goTo(pager.index + 1);\">Next</button>\r\n              <button class=\"btn btn-default\" *ngIf=\"config.allowBack\" (click)=\"goTo(pager.count - 1);\">Last</button>\r\n              <!--<pagination *ngIf=\"config.showPager\" direction-links=\"false\" total-items=\"totalItems\" items-per-page=\"itemsPerPage\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>-->\r\n            </div>\r\n          </div>\r\n        \r\n          <div class=\"row review\" *ngIf=\"mode=='review'\">\r\n            <div class=\"col-sm-4\" *ngFor=\"let question of quiz.questions; let index = index;\">\r\n              <div (click)=\"goTo(index)\" class=\"{{ isAnswered(question) == 'Answered'? 'answered': 'not-answered' }}\">{{index + 1}}. {{ isAnswered(question) }}</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"result\" *ngIf=\"mode=='result'\">\r\n            <h2>Quiz Result</h2>\r\n            <div *ngFor=\"let question of quiz.questions; let index = index\">\r\n              <div class=\"result-question\">\r\n                <h4>{{index + 1}}. {{question.name}}</h4>\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\" *ngFor=\"let Option of question.options\">\r\n                    <input id=\"{{Option.id}}\" type=\"checkbox\" disabled=\"disabled\" [(ngModel)]=\"Option.selected\" /> {{Option.name}}\r\n                  </div>\r\n                </div>\r\n                <div class=\"alert {{ isCorrect(question) == 'correct'? 'alert-success': 'alert-danger'}}\">Your answer is {{isCorrect(question)}}.</div>\r\n              </div>\r\n            </div>\r\n            <h4 class=\"alert alert-info text-sm-center\">You may close this window now.</h4>\r\n          </div>\r\n          <hr />\r\n          <div *ngIf=\"mode!='result'\">\r\n            <button class=\"btn btn-default\" (click)=\"mode = 'quiz'\">Quiz</button>\r\n            <button class=\"btn btn-default\" (click)=\"mode = 'review'\">Review</button>\r\n            <button class=\"btn btn-default\" (click)=\"onSubmit();\">Submit Quiz</button>\r\n          </div>\r\n        </div>\r\n        </div>"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Online Quiz Competition</a>\n    </div>\n  \n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">Top Scorer</a></li>\n        <li><a href=\"#\">Link</a></li>        \n      </ul>      \n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [routerLink]=\"['/login']\">Logout</a></li>        \n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </nav>\n\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-3 col-md-offset-4\">\n          <div class=\"account-box\">\n              <div class=\"logo \">\n                  <h2>Login</h2>\n              </div>\n              <form class=\"form-signin\" action=\"#\">\n              <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\"  autofocus />\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\"  />\n              </div>\n             \n              <button [routerLink]=\"['/user-dashboard']\" class=\"btn btn-lg btn-block purple-bg\" type=\"submit\">\n                  Sign in</button>\n              </form>\n              \n              <div class=\"or-box\">\n                  <span class=\"or\">OR</span>                  \n              </div>\n              <div>\n                  <h4>Click here for<a [routerLink]=\"['/dashboard']\"> Admin Login</a></h4>\n              </div>\n              <div class=\" row-block\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12 row-block\">\n                          <a [routerLink]=\"['/register']\" class=\"btn btn-primary btn-block\">Create New Account</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-3 col-md-offset-4\">\n          <div class=\"account-box\">\n              <div class=\"logo \">\n                  <h2>Register</h2>\n              </div>\n              <form class=\"form-signin\" method=\"post\">\n                  <div >\n              <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"user.firstName\" name=\"first\" class=\"form-control\" placeholder=\"First Name\" required autofocus />\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"user.lastName\" name=\"last\" class=\"form-control\" placeholder=\"Last Name\" required autofocus />\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required autofocus />\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required />\n              </div>\n             \n              <button  class=\"btn btn-lg btn-block purple-bg\" type=\"submit\" (click)=\"register()\">\n                  Sign Up</button>\n                </div>\n              </form>\n              \n              <div class=\"or-box\">\n                  <span class=\"or\">OR</span>                  \n              </div>\n              <div class=\" row-block\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12 row-block\">\n                          <a [routerLink]=\"['/login']\" class=\"btn btn-primary btn-block\">Log In</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<p>\n  top-scorer works!\n</p>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"container\">\n  <h1>Select Exam</h1>\n  <br><br>\n<div class=\"panel panel-default\">\n<div class=\"panel-body\">\n  <div class=\"col-sm-3\">\n      <h2>Exam 1</h2>\n  </div >\n  <div class=\"col-sm-3\" style=\"padding-top:5px;\">\n      <h3>Total Questions 20</h3>\n  </div>\n  <div class=\"col-sm-3\" style=\"padding-top:5px;\">\n      <h3>Time 20 min</h3>\n  </div>\n  <div class=\"col-sm-3\" style=\"padding-top:23px;\">\n      <a class=\"btn btn-success\" [routerLink]=\"['/quiz']\">Take Exam Now</a>\n  </div>\n</div><br>\n</div><hr>\n  </div>"

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(407);


/***/ })

},[748]);
//# sourceMappingURL=main.bundle.js.map