// Get campaign object for client side

module.exports = (campaign, callback) => {
  if (!campaign || !campaign._id)
    return callback('document_not_found');

  return callback(null, {
    _id: campaign._id.toString(),
    name: campaign.name,
    image: campaign.image || campaign.photo,
    description: campaign.description,
    information: campaign.information,
    price: campaign.price,
    is_free: campaign.is_free,
    questions: campaign.questions,
    countries: campaign.countries,
    gender: campaign.gender,
    min_birth_year: campaign.min_birth_year,
    max_birth_year: campaign.max_birth_year,
    paused: campaign.paused
  });
}
