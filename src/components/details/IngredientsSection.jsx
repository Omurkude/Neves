import React from 'react';
import { useTranslation } from 'react-i18next';
import productDetails from '../../data/productDetails.js';
import { getFlavourKey, getIngredientKey } from '../../data/flavours.js';
import { CheckCircle2, Tag, Palette } from 'lucide-react';

export default function IngredientsSection({ selectedFlavour }) {
  const { t } = useTranslation();

  // Use selectedFlavour if provided, else fallback to productDetails
  const currentFlavour = selectedFlavour || {
    id: 'classic-cola',
    name: productDetails.brand.name,
    category: productDetails.ingredientsInfo.category,
    rawIngredients: productDetails.ingredientsInfo.rawLabelText,
    rawDeclarations: productDetails.ingredientsInfo.rawDeclarationsText,
    ingredients: productDetails.ingredientsInfo.baseIngredients,
    declarations: productDetails.ingredientsInfo.declarations,
    allergenNotice: productDetails.ingredientsInfo.allergenNotice,
    syntheticColours: ['E-150-D'],
    syntheticColoursDetail: 'Synthetic Food Colour (E-150-D)',
    hasSyntheticColours: true,
    preservatives: ['Class II Preservative (211)']
  };

  const flavourKey = currentFlavour.id ? getFlavourKey(currentFlavour.id) : null;
  const displayName = flavourKey ? t(`flavours.${flavourKey}.name`, currentFlavour.name) : currentFlavour.name;
  const displayRawIngredients = flavourKey ? t(`flavours.${flavourKey}.rawIngredients`, currentFlavour.rawIngredients || currentFlavour.rawLabelText) : (currentFlavour.rawIngredients || currentFlavour.rawLabelText);
  const displayRawDeclarations = flavourKey ? t(`flavours.${flavourKey}.rawDeclarations`, currentFlavour.rawDeclarations || currentFlavour.rawDeclarationsText) : (currentFlavour.rawDeclarations || currentFlavour.rawDeclarationsText);
  const displaySyntheticDetail = flavourKey ? t(`flavours.${flavourKey}.syntheticColoursDetail`, currentFlavour.syntheticColoursDetail) : currentFlavour.syntheticColoursDetail;
  const displayAllergenNotice = flavourKey ? t(`flavours.${flavourKey}.allergenNotice`, currentFlavour.allergenNotice) : currentFlavour.allergenNotice;

  const hasColours = currentFlavour.hasSyntheticColours !== undefined
    ? currentFlavour.hasSyntheticColours
    : currentFlavour.syntheticColours?.length > 0;

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Product Category & 100% Vegetarian Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
            {t('ingredientsSection.category', 'Product Category')}
          </span>
          <span className="font-extrabold text-[#0B192C]">
            {t('ingredientsSection.categoryValue', currentFlavour.category || productDetails.ingredientsInfo.category)}
          </span>
          <span className="text-[11px] text-slate-500 block font-medium mt-0.5">
            {t('ingredientsSection.activeFlavour', 'Active Flavour:')} <strong className="text-slate-800">{displayName}</strong> ({currentFlavour.specs?.volume || '200 ml'})
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200 w-fit">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-white" />
          <span className="text-[11px] font-bold">{t('ingredientsSection.vegetarian', '100% Vegetarian')}</span>
        </div>
      </div>

      {/* Official Label Ingredients Excerpt */}
      <div className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 space-y-1.5">
        <div className="flex items-center gap-1.5 text-orange-900 font-bold text-xs uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span>{t('ingredientsSection.officialLabelDeclaration', 'Official Label Declaration')} ({displayName})</span>
        </div>
        <p className="font-mono text-xs text-slate-800 leading-relaxed font-semibold">
          {displayRawIngredients}
        </p>
        <p className="text-[11px] text-orange-950 font-medium pt-0.5">
          {displayRawDeclarations}
        </p>
      </div>

      {/* Flavour-Specific Synthetic Food Colours Box */}
      <div className={`p-3.5 rounded-xl border space-y-2 ${
        hasColours
          ? 'bg-amber-50/70 border-amber-200/80 text-amber-950'
          : 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
      }`}>
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <Palette className={`w-3.5 h-3.5 ${hasColours ? 'text-amber-700' : 'text-emerald-700'}`} />
            <span>{t('selectedProduct.syntheticColours', 'Synthetic Food Colours')} ({displayName})</span>
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            {t('ingredientsSection.statutoryCompliance', 'Statutory Compliance')}
          </span>
        </div>

        {hasColours && currentFlavour.syntheticColours?.length > 0 ? (
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-700">{t('ingredientsSection.declaredColours', 'Declared Colours:')}</span>
              {currentFlavour.syntheticColours.map((colourCode) => (
                <span
                  key={colourCode}
                  className="px-2.5 py-0.5 rounded-md font-mono font-bold text-xs bg-amber-200/80 text-amber-900 border border-amber-300"
                >
                  {colourCode}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              {displaySyntheticDetail}
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 py-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('ingredientsSection.noAddedColoursFull', 'No added colours. (100% Free from synthetic food colourings)')}</span>
          </div>
        )}
      </div>

      {/* Structured Ingredients Breakdown */}
      <div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
          {t('ingredientsSection.breakdownTitle', 'Ingredients Breakdown & Function')} ({displayName})
        </span>
        <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 overflow-hidden text-xs">
          {(currentFlavour.ingredients || currentFlavour.baseIngredients)?.map((item) => {
            const rawName = typeof item === 'string' ? item : item.name;
            const ingKey = getIngredientKey(rawName);
            const itemName = ingKey ? t(`ingredientsList.${ingKey}.name`, rawName) : rawName;
            const fallbackPurpose = typeof item === 'string' ? '' : (item.purpose || item.role);
            const itemPurpose = ingKey ? t(`ingredientsList.${ingKey}.purpose`, fallbackPurpose) : fallbackPurpose;

            return (
              <div key={rawName} className="p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 hover:bg-slate-50/50">
                <span className="font-bold text-[#0B192C]">{itemName}</span>
                {itemPurpose && <span className="text-slate-500 sm:text-right">{itemPurpose}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Statutory Label Declarations */}
      <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
          {t('ingredientsSection.statutoryTitle', 'Statutory Declarations on Label')}
        </span>
        <ul className="space-y-1.5 text-xs text-amber-900">
          {currentFlavour.declarations?.map((dec) => {
            let translatedDec = dec;
            if (dec.includes('211')) {
              translatedDec = t('ingredientsSection.class2Preservative', dec);
            } else if (dec.includes('No Fruit')) {
              translatedDec = t('ingredientsSection.noFruitAdded', dec);
            } else if (dec.includes('No added')) {
              translatedDec = t('selectedProduct.noAddedColours', dec);
            }
            return (
              <li key={dec} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>{translatedDec}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Allergen Notice */}
      <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700">
        <strong className="text-slate-900">{t('ingredientsSection.allergenTitle', 'Allergen Information:')} </strong>
        {displayAllergenNotice}
      </div>
    </div>
  );
}
