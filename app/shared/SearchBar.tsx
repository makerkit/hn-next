import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchBar(
  props: React.PropsWithChildren<{
    value?: string | undefined;
  }>
) {
  return (
    <form className={'w-full'} action={'/search'} method={'GET'}>
      <div
        className={
          'dark:bg-black-300 flex space-x-4 items-center transition-all dark:focus-in:bg-black-400 bg-gray-100 focus-in:bg-gray-200 rounded-lg px-4 py-3 w-full'
        }
      >
        <MagnifyingGlassIcon className={'h-5'} />

        <input
          autoComplete={'off'}
          className={'bg-transparent w-full dark:bg-black-300 outline-none'}
          name={'query'}
          defaultValue={props.value}
          type="text"
          placeholder={'Search...'}
        />
      </div>
    </form>
  );
}

export default SearchBar;
