module App {

    export interface ISimpleScope extends ng.IScope {
        singleModel: number;
    }

    export class SimpleController {

        constructor(private $scope: ISimpleScope) {

            this.$scope.singleModel = 1;

        }

    }

}
