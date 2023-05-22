import './characterCard.css';

const CharacterCard = ({ charecter }) => {
    const { name, image, gender, status, type, location } = charecter;

    return (
        <article className='max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-emerald-300 relative'>
            <img className='w-full' src={image} alt='' />
            <div className='px-6 py-4'>
                <h3 className='font-bold text-xl mb-2'>{name}</h3>
                <div>
                    {/* TODO:  status can be 'alive'/'dead'/'unknown'*/}
                    <div
                        className={`border p-2 px-6 inline-block rounded-full font-bold  ${status.toLowerCase()} absolute top-1 right-1`}
                    >
                        {status}
                    </div>
                    <span>{type}</span>
                </div>
                <div>
                    <p>
                        <span className='text-slate-500'>
                            Last known location:
                        </span>
                        <br /> <span className='text-xl'>{location.name}</span>
                    </p>
                </div>
            </div>
        </article>
    );
};
export default CharacterCard;
