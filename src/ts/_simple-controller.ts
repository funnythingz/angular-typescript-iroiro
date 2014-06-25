module App {

    export interface ISimpleScope extends ng.IScope {
    }

    export class SimpleController {

        constructor(private $scope: ISimpleScope) {

        }

    }

}
