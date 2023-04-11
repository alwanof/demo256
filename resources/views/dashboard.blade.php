<x-app-layout>
    <x-slot name="header">

        <div class="flex justify-between  text-white ">
            <h2 class="flex  font-semibold text-xl">
                {{ __('Dashboard') }}
            </h2>
            <nav class="flex">
                <a href="#" class="pr-3 font-medium hover:text-gray-900">Home</a>
                <a href="#" class="pr-3  font-medium hover:text-gray-900">About</a>
                <a href="#" class="pr-3   font-medium hover:text-gray-900">Services</a>
                <a href="#" class="pr-3  font-medium hover:text-gray-900">Contact</a>
            </nav>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-8xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <x-welcome />
            </div>
        </div>
    </div>
</x-app-layout>
