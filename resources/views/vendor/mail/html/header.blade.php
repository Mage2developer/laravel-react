@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
<img src="{{ asset('images/email/logo.png') }}" class="logo" alt="{{ $slot }}" title="{{ $slot }}" style="width: 300px;">
@endif
</a>
</td>
</tr>
