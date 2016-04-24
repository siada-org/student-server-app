<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);?>
<br><br>
<div class="col-lg-12">
	<form method="get" action="/p/search/index.php">
		<div class="input-group" style="margin-top: 40vh;">
			<span class="input-group-addon"><i class="fa fa-fw fa-search"></i> </span>
			<input class="form-control" type="text" name="q" maxlength="50" placeholder="Поиск..."/>
		</div>
		<input class="btn btn-block btn-primary btn-lg" type="submit" style="margin-top: 30px;" value="ПОИСК"/>
	</form>
</div>