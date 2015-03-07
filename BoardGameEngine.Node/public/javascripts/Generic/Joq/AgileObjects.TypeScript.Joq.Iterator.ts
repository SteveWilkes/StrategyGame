﻿module AgileObjects.TypeScript {
    var ignore = null;

    export class JoqIterator<TItem, TResult> {
        constructor(private _seed: any, private _handler: (item: TItem) => TResult) { }

        public select<TNewResult>(projection: (value: TResult) => TNewResult): JoqIterator<TItem, TNewResult> {
            var handler = (item: TItem) => {
                var result = this._handler(item);
                return projection(result);
            };
            return new JoqIterator(this._seed, handler);
        }

        public where(predicate: (item: TResult) => boolean): JoqIterator<TItem, TResult> {
            var handlerSoFar = this._handler;
            this._handler = (item: TItem) => {
                var result = handlerSoFar(item);
                return predicate(result) ? result : ignore;
            };
            return this;
        }

        public first(predicate?: (item: TResult) => boolean): TResult {
            var hasPredicate = typeof predicate === "function";
            var result = ignore;

            this._iterate((item: TItem) => {
                result = this._handler(item);
                if (hasPredicate) {
                    if (predicate(result)) { return false; }
                    return true;
                }
                return false;
            });

            if (result !== ignore) { return result; }

            throw new Error(hasPredicate ? "No matching item found" : "No properties to iterate");
        }

        public firstOrDefault(predicate?: (item: TResult) => boolean): TResult;
        public firstOrDefault(defaultValue?: TResult): TResult;
        public firstOrDefault(predicate?: any, defaultValue?: TResult): TResult {
            var hasPredicate = typeof predicate === "function";

            if ((defaultValue == null) && !hasPredicate) {
                defaultValue = <TResult>predicate;
                predicate = null;
            }

            var result = null;

            this._iterate((item: TItem) => {
                result = this._handler(item);
                if (hasPredicate) {
                    if (predicate(result)) { return false; }
                    return true;
                }
                return false;
            });

            // ReSharper disable once ExpressionIsAlwaysConst
            if (result === ignore) { result = null; }

            // ReSharper disable once ConditionIsAlwaysConst
            return result || defaultValue || null;
        }

        public toArray(): Array<TResult> {
            var results = new Array<TResult>();
            this._iterate((item: TItem) => {
                var result = this._handler(item);
                if (result !== ignore) { results.push(result); }
                return true;
            });
            return results;
        }

        private _iterate(handler: (value, index) => boolean) {
            var continueIteration;

            if (this._seed instanceof Array) {
                var seedLength = this._seed.length;
                for (var i = 0; i < seedLength; i++) {
                    continueIteration = handler(this._seed[i], i);

                    if (continueIteration === false) { break; }
                }
                return;
            }

            for (var propertyName in this._seed) {
                var propertyValue = this._seed[propertyName];
                if (typeof propertyValue === "function") { continue; }

                continueIteration = handler(propertyValue, propertyName);

                if (continueIteration === false) { break; }
            }
        }
    }
}