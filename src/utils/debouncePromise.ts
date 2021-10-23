interface IDeferredPromise {
  promise: Promise<void>;
  resolve: (value: void | PromiseLike<void>) => void;
  reject: (reason?: any) => void;
}
const DEFAULT_WAIT = 500;

function defer(): IDeferredPromise {
  const deferred = {} as any;
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
}

/**
 * Debounce promise returning function
 *
 * @param   {Function}  fn    Asyncronous function
 * @param   {Number}    wait  Delay in ms
 *
 * @return  {Function}        Debounced function
 */
export default function debouncePromise(
  fn: (...args: any) => Promise<any>,
  wait: number = DEFAULT_WAIT,
): (...args: any) => void | Promise<any> {
  let deferred: IDeferredPromise | null;
  let timer: NodeJS.Timeout;
  let pendingArgs: any[] = [];

  function flush(this: any) {
    const thisDeferred = deferred;
    clearTimeout(timer);
    Promise.resolve(fn.apply(this, pendingArgs[pendingArgs.length - 1])).then(
      thisDeferred!.resolve,
      thisDeferred!.reject,
    );
    pendingArgs = [];
    deferred = null;
  }

  return function debounced(this: any, ...args: any) {
    if (deferred) {
      clearTimeout(timer);
    } else {
      deferred = defer();
    }
    pendingArgs.push(args);
    timer = setTimeout(flush.bind(this), wait);

    return deferred.promise;
  };
}
